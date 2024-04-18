import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import Header from "../components/Header";
import styles from "../Styles/styles";
import { nuage } from "../config/config";

export default () => {
  [variable, setVariable] = useState(0);

  const fetchData = async () => {
    const data = await fetch(
      nuage + "api"
    );
    const dataJSON = await data.json();

    setVariable(dataJSON);
  };

  return (
    <View style={styles.body}>
      <Header />
      <Text>Coucouu Hello</Text>
      <Text>{variable.test}</Text>
      <Button
        title="refresh"
        onPress={() => {
          fetchData();
        }}
      />
    </View>
  );
};
