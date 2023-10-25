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

    /**
     * * Function used to handle the onDragEnd event that occurs when a dragged
     * * marker is released on the map.
     * @param coordinate Coordinates after being dragged and released.
     * @param pointSetter function used to update the state of a specific point.
     */
    const handleMarkerDragEnd = (coordinate, pointSetter) => {
        pointSetter(coordinate);
    };

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
            <Marker
                coordinate={point1}
                color="blue"
                isDraggable={true}
                onDragEnd={(e) =>
                    handleMarkerDragEnd(e.nativeEvent.coordinate, setPoint1)
                }
            />
            <Marker
                coordinate={point2}
                color="blue"
                isDraggable={true}
                onDragEnd={(e) =>
                    handleMarkerDragEnd(e.nativeEvent.coordinate, setPoint2)
                }
            />
            <Marker
                coordinate={point3}
                color="blue"
                isDraggable={true}
                onDragEnd={(e) =>
                    handleMarkerDragEnd(e.nativeEvent.coordinate, setPoint3)
                }
            />
            <Marker
                coordinate={point4}
                color="blue"
                isDraggable={true}
                onDragEnd={(e) =>
                    handleMarkerDragEnd(e.nativeEvent.coordinate, setPoint4)
                }
            />
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
