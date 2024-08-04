package com.smarthome.devicesevice.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Type;
import org.springframework.data.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document(collection = "devices")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Device {
    @Id
    @JsonProperty("id")

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
