import { Marker } from "react-native-maps";

export default function CustomMarker({ coordinate, color }) {
    return <Marker coordinate={coordinate} pinColor={color} />;
}
