import { useState } from "react"
import { View, Text } from "react-native"

export default ()=> {
    [variable, setVariable] = useState(0)

    return (
        <View>
            <Text>Coucouu Settings</Text>
            <Text>{variable}</Text>
        </View>
    )
}