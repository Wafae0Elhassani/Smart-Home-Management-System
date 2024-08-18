import { type } from '../enums/type.enum'; 
import { Location } from '../enums/location.enum';

export const locationTypeMapping = {
    [Location.LIVING_ROOM]: [type.LIGHT, type.THERMOSTAT, type.CAMERA, type.DOOR_LOCK, type.SENSOR, type.PLUG],
    [Location.KITCHEN]: [type.LIGHT, type.THERMOSTAT, type.SENSOR, type.PLUG],
    [Location.BEDROOM]: [type.LIGHT, type.THERMOSTAT, type.CAMERA, type.DOOR_LOCK, type.SENSOR],
    [Location.BATHROOM]: [type.LIGHT, type.THERMOSTAT, type.SENSOR],
    [Location.OFFICE]: [type.LIGHT, type.THERMOSTAT, type.CAMERA, type.SENSOR, type.PLUG, type.HVAC],
    [Location.GARAGE]: [type.LIGHT, type.CAMERA, type.DOOR_LOCK, type.SENSOR],
    [Location.OUTDOOR]: [type.LIGHT, type.CAMERA, type.SENSOR, type.DOOR_LOCK, type.PLUG, type.HVAC],
};
