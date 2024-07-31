package com.smarthome.devicesevice.controller;

import com.smarthome.devicesevice.dto.DeviceDto;
import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Type;
import com.smarthome.devicesevice.service.DeviceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/device")
public class DeviceController {

    private final DeviceService deviceService;

    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @PostMapping("/add")
    public ResponseEntity<DeviceDto> addDevice(@RequestBody DeviceDto deviceDto) {
        DeviceDto savedDevice = deviceService.addDevice(deviceDto);
        return ResponseEntity.ok(savedDevice);
    }

    @PostMapping("/update/{deviceId}")
    public ResponseEntity<DeviceDto> updateDevice(@PathVariable String deviceId, @RequestBody DeviceDto deviceDto){
        DeviceDto updatedDevice = deviceService.updateDevice(deviceId, deviceDto);
        return ResponseEntity.ok(updatedDevice);
    }

    @DeleteMapping("/delete/{deviceId}")
    public ResponseEntity<Void> removeDevice(@PathVariable String deviceId) {
        deviceService.removeDevice(deviceId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/all")
    public ResponseEntity<List<DeviceDto>> viewAllDevices() {
        List<DeviceDto> deviceList = deviceService.viewAllDevices();
        return ResponseEntity.ok(deviceList);
    }

    @GetMapping("/{deviceId}")
    public ResponseEntity<DeviceDto> getDeviceById(@PathVariable String deviceId) {
        DeviceDto devicedto = deviceService.getDeviceById(deviceId);
        return ResponseEntity.ok(devicedto);
    }

    @GetMapping("/status/{deviceId}")
    public ResponseEntity<String> getDeviceStatus(@PathVariable String deviceId) {
        String status = deviceService.getDeviceStatus(deviceId);
        return ResponseEntity.ok(status);
    }

    @GetMapping("/location/{deviceLocation}")
    public ResponseEntity<List<DeviceDto>> getDevicesByLocation(@PathVariable String deviceLocation) {
        Location location;
        try {
            location = Location.valueOf(deviceLocation.toUpperCase());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
        List<DeviceDto> deviceList = deviceService.getDevicesByLocation(location);
        return ResponseEntity.ok(deviceList);
    }

    @GetMapping("/type/{deviceType}")
    public ResponseEntity<List<DeviceDto>> getDevicesByType(@PathVariable String deviceType) {
        Type type;
        try {
            type = Type.valueOf(deviceType.toUpperCase());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
        List<DeviceDto> deviceList = deviceService.getDevicesByType(type);
        return ResponseEntity.ok(deviceList);
    }


}
