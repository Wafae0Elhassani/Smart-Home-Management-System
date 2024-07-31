package com.smarthome.devicesevice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Type;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

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
    private String deviceStatus;

    @JsonProperty("deviceLocation")
    private Location deviceLocation;

    @JsonProperty("setting")
    private Map<String, Object> setting;
}
