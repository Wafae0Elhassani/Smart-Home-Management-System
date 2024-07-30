package com.smarthome.devicesevice.dto;

import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Status;
import com.smarthome.devicesevice.enums.Type;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class DeviceDto {
    private Long id;
    private String DeviceName;
    private Type DeviceType;
    private Status DeviceStatus;
    private Location DeviceLocation;
}
