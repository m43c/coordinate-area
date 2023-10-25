import { Marker } from "react-native-maps";

export default function CustomMarker({
    coordinate,
    color,
    isDraggable = false,
    onDragEnd,
}) {
    return (
        <Marker
            coordinate={coordinate}
            pinColor={color}
            draggable={isDraggable}
            onDragEnd={onDragEnd}
        />
    );
}
