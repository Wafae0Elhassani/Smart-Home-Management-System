package com.smarthome.devicesevice.repository;

import com.smarthome.devicesevice.entity.Device;
import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Type;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeviceRepository extends MongoRepository<Device, String> {

    List<Device> findByDeviceLocation(Location deviceLocation);

    List<Device> findByDeviceType(Type deviceType);

    long countByDeviceLocation(Location deviceLocation);

    long countByDeviceTypeAndDeviceLocation(Type type, Location location);
}
