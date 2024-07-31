package com.smarthome.devicesevice.service.Impl;

import com.smarthome.devicesevice.dto.DeviceDto;
import com.smarthome.devicesevice.entity.Device;
import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Status;
import com.smarthome.devicesevice.enums.Type;
import com.smarthome.devicesevice.mapper.Impl.DeviceMapper;
import com.smarthome.devicesevice.repository.DeviceRepository;
import com.smarthome.devicesevice.service.DeviceService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DeviceServiceImpl implements DeviceService {

    private final DeviceMapper deviceMapper;
    private final DeviceRepository deviceRepository;

    public DeviceServiceImpl(DeviceMapper deviceMapper, DeviceRepository deviceRepository) {
        this.deviceMapper = deviceMapper;
        this.deviceRepository = deviceRepository;
    }

    @Override
    public DeviceDto addDevice(DeviceDto deviceDto) {
        Device device = deviceMapper.toEntity(deviceDto);
        Device savedDevice = deviceRepository.save(device);
        return deviceMapper.toDto(savedDevice);
    }

    @Override
    public DeviceDto updateDevice(String DeviceId, DeviceDto deviceDto) {
        Device device = deviceRepository.findById(DeviceId).orElse(null);
        assert device != null;
        device.setDeviceName(deviceDto.getDeviceName());
        device.setDeviceType(deviceDto.getDeviceType());
        device.setDeviceStatus(deviceDto.getDeviceStatus());
        device.setDeviceLocation(deviceDto.getDeviceLocation());
        Device updatedDevice = deviceRepository.save(device);
        return deviceMapper.toDto(updatedDevice);
    }

    @Override
    public void removeDevice(String deviceId) {
        deviceRepository.deleteById(deviceId);
    }

    @Override
    public List<DeviceDto> viewAllDevices() {
        List<Device> deviceList = deviceRepository.findAll();
        return deviceMapper.toDto(deviceList);
    }

    @Override
    public DeviceDto getDeviceById(String deviceId) {
        Device device = deviceRepository.findById(deviceId).orElse(null);
        assert device != null;
        return deviceMapper.toDto(device);
    }

    @Override
    public Status getDeviceStatus(String deviceId) {
        Device device = deviceRepository.findById(deviceId).orElse(null);
        assert device != null;
        return device.getDeviceStatus();
    }

    @Override
    public List<DeviceDto> getDevicesByLocation(Location deviceLocation) {
        List<Device> deviceList = deviceRepository.findByDeviceLocation(deviceLocation);
        return deviceMapper.toDto(deviceList);
    }

    @Override
    public List<DeviceDto> getDevicesByType(Type deviceType) {
        List<Device> deviceList = deviceRepository.findByDeviceType(deviceType);
        return deviceMapper.toDto(deviceList);
    }
}
