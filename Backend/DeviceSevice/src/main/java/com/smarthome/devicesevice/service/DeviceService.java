package com.smarthome.devicesevice.service;

import com.smarthome.devicesevice.dto.DeviceDto;
import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Type;

import java.util.List;

public interface DeviceService {
    DeviceDto addDevice(DeviceDto deviceDto);
    DeviceDto updateDevice(String DeviceId, DeviceDto deviceDto);
    void removeDevice(String deviceId);
    List<DeviceDto> viewAllDevices();

    DeviceDto getDeviceById(String deviceId);
    String getDeviceStatus(String deviceId);
    List<DeviceDto> getDevicesByLocation(Location deviceLocation);
    List<DeviceDto> getDevicesByType(Type deviceType);
}
