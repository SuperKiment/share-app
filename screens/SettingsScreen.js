import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import Header from "../components/Header";
import styles from "../Styles/styles";

export default () => {
  [variable, setVariable] = useState(0);

  const fetchData = async () => {
    const data = await fetch(
      "https://s4-8060.nuage-peda.fr/ShareMelanie/Share/public/api"
    );
    const dataJSON = await data.json();

    console.log(dataJSON);

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
