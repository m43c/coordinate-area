import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Marker from "./CustomMarker";

export default function Map() {
    const currentLocation = {
        latitude: -22.012897,
        longitude: -63.687059,
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
            <Marker coordinate={currentLocation} />
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
