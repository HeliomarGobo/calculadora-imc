import { Text } from "react-native"

export const TextValue = ({value }) => {
    return (
        <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        {value}
      </Text>
    )
}
export const TextLabel = ({ label }) => {
    return (
        <Text
        style={{
          fontSize: 18,
        }}
      >
        {label}
      </Text>
    )
}