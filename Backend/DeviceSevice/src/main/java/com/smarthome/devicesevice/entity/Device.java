package com.smarthome.devicesevice.entity;

import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Status;
import com.smarthome.devicesevice.enums.Type;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String DeviceName;
    private Type DeviceType;
    private Status DeviceStatus;
    private Location DeviceLocation;
}
