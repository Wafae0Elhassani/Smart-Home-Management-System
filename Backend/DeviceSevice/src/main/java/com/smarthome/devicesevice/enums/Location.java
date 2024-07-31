package com.smarthome.devicesevice.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Location {
    LIVING_ROOM, KITCHEN, BEDROOM, BATHROOM, OFFICE, GARAGE, OUTDOOR, OTHER;

    @JsonValue
    public String toJson() {
        return name();
    }
}
