package com.smarthome.devicesevice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    private String id;
    @JsonProperty("deviceName")
    private String deviceName;

    @JsonProperty("deviceType")
    private Type deviceType;

    @JsonProperty("deviceStatus")
    private Status deviceStatus;

    @JsonProperty("deviceLocation")
    private Location deviceLocation;
}
