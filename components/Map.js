import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Marker from "./CustomMarker";

export default function Map() {
    const [currentLocation, setcurrentLocation] = useState({
        latitude: -22.012897,
        longitude: -63.687059,
    });

    /**
     * * The 4 coordinate points will have the same latitude and longitude as
     * * the current location
     * ? Static coordinate points could be established
     */
    const [point1, setPoint1] = useState({
        latitude: -22.012897,
        longitude: -63.687059,
    });
    const [point2, setPoint2] = useState({
        latitude: -22.012897,
        longitude: -63.687059,
    });
    const [point3, setPoint3] = useState({
        latitude: -22.012897,
        longitude: -63.687059,
    });
    const [point4, setPoint4] = useState({
        latitude: -22.012897,
        longitude: -63.687059,
    });

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {/* Non-draggable custom marker for current location reference only*/}
            <Marker coordinate={currentLocation} />

            {/* Custom draggable markers for coordinate point reference */}
            <Marker coordinate={point1} color="blue" isDraggable={true} />
            <Marker coordinate={point2} color="blue" isDraggable={true} />
            <Marker coordinate={point3} color="blue" isDraggable={true} />
            <Marker coordinate={point4} color="blue" isDraggable={true} />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});
