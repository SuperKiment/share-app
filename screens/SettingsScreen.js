import { useState } from "react"
import { View, Text } from "react-native"
import Header from '../components/Header';

export default ()=> {
    [variable, setVariable] = useState(0)

    return (
        <View>
            <Header />
            <Text>Coucouu Hello</Text>
            <Text>{variable}</Text>
        </View>
    )
}