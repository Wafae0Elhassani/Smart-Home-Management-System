package com.smarthome.devicesevice.entity;

import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Status;
import com.smarthome.devicesevice.enums.Type;
import org.springframework.data.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

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
    private Status deviceStatus;
    private Location deviceLocation;
}
