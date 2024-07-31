package com.smarthome.devicesevice.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Status {
    ON, OFF, IDLE, ERROR, MAINTENANCE, UNKNOWN;
    @JsonValue
    public String toJson() {
        return name();
    }
}
