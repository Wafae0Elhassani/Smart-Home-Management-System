package com.smarthome.devicesevice.mapper.Impl;

import com.smarthome.devicesevice.dto.DeviceDto;
import com.smarthome.devicesevice.entity.Device;
import com.smarthome.devicesevice.mapper.EntityMapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DeviceMapper implements EntityMapper<DeviceDto, Device> {
    @Override
    public Device toEntity(DeviceDto dto) {
        Device device = new Device();
        device.setId(dto.getId());
        device.setDeviceName(dto.getDeviceName());
        device.setDeviceType(dto.getDeviceType());
        device.setDeviceStatus(dto.getDeviceStatus());
        device.setDeviceLocation(dto.getDeviceLocation());
        return device;
    }

    @Override
    public DeviceDto toDto(Device entity) {
        DeviceDto deviceDto = new DeviceDto();
        deviceDto.setId(entity.getId());
        deviceDto.setDeviceName(entity.getDeviceName());
        deviceDto.setDeviceType(entity.getDeviceType());
        deviceDto.setDeviceStatus(entity.getDeviceStatus());
        deviceDto.setDeviceLocation(entity.getDeviceLocation());
        return deviceDto;
    }

    @Override
    public List<Device> toEntity(List<DeviceDto> dtoList) {
        List<Device> deviceList = new ArrayList<>();
        for (DeviceDto deviceDto: dtoList){
            deviceList.add(toEntity(deviceDto));
        }
        return deviceList;
    }

    @Override
    public List<DeviceDto> toDto(List<Device> entityList) {
        List<DeviceDto> deviceDtoList = new ArrayList<>();
        for (Device device: entityList){
            deviceDtoList.add(toDto(device));
        }
        return deviceDtoList;
    }
}
