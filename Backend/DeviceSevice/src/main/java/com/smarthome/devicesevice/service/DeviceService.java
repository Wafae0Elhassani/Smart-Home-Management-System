package com.smarthome.devicesevice.service;

import com.smarthome.devicesevice.dto.DeviceDto;
import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Status;
import com.smarthome.devicesevice.enums.Type;

import java.util.List;

public interface DeviceService {
    DeviceDto addDevice(DeviceDto deviceDto);
    DeviceDto updateDevice(Long DeviceId, DeviceDto deviceDto);
    void removeDevice(Long deviceId);
    List<DeviceDto> viewAllDevices();
    Status getDeviceStatus(Long deviceId);
    List<DeviceDto> getDevicesByLocation(Location deviceLocation);
    List<DeviceDto> getDevicesByType(Type deviceType);
}
