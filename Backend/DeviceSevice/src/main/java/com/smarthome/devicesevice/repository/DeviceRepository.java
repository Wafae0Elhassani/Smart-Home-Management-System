package com.smarthome.devicesevice.repository;

import com.smarthome.devicesevice.entity.Device;
import com.smarthome.devicesevice.enums.Location;
import com.smarthome.devicesevice.enums.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeviceRepository extends JpaRepository<Device, Long> {

    List<Device> findByDeviceLocation(Location deviceLocation);

    List<Device> findByDeviceType(Type deviceType);
}
