package com.smarthome.devicesevice.entity;

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
    private String id;
    private String deviceName;
    private Type deviceType;
    private String deviceStatus;
    private Location deviceLocation;
    private Map<String, Object> setting;
}
