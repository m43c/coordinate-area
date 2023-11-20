import React, { useEffect, useState } from "react";

import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

import * as turf from "@turf/turf";

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

    // State controller for movement of markers
    const [moveMarkers, setmoveMarkers] = useState(0);

    /**
     * * Function used to handle the onDragEnd event that occurs when a dragged
     * * marker is released on the map.
     * @param coordinate Coordinates after being dragged and released.
     * @param pointSetter function used to update the state of a specific point.
     */
    const handleMarkerDragEnd = (coordinate, pointSetter) => {
        pointSetter(coordinate);
        setmoveMarkers(moveMarkers + 1);
    };

    const calculateArea = () => {
        if (moveMarkers === 4) {
            // Define the four geographic coordinates (latitude and longitude) of your points
            const coordinate1 = turf.point([point1.longitude, point1.latitude]);
            const coordinate2 = turf.point([point2.longitude, point2.latitude]);
            const coordinate3 = turf.point([point3.longitude, point3.latitude]);
            const coordinate4 = turf.point([point4.longitude, point4.latitude]);

            // Create a polygon from these points
            const polygon = turf.polygon([
                [
                    turf.getCoord(coordinate1),
                    turf.getCoord(coordinate2),
                    turf.getCoord(coordinate3),
                    turf.getCoord(coordinate4),
                    turf.getCoord(coordinate1),
                ],
            ]);

            // Calculate the area of the polygon
            const area = turf.area(polygon);
            console.log(`Approximate area in square meters: ${area}`);
        }
    };

    useEffect(() => {
        calculateArea();
    }, [point1, point2, point3, point4]);

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
