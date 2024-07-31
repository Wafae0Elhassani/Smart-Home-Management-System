package com.smarthome.devicesevice.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Type {
    LIGHT, THERMOSTAT, CAMERA, DOOR_LOCK, SENSOR, PLUG, APPLIANCE, HVAC, OTHER;
    @JsonValue
    public String toJson() {
        return name();
    }
}
