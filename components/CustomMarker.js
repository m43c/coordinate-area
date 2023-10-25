import { Marker } from "react-native-maps";

export default function CustomMarker({
    coordinate,
    color,
    isDraggable = false,
}) {
    return (
        <Marker
            coordinate={coordinate}
            pinColor={color}
            draggable={isDraggable}
        />
    );
}
