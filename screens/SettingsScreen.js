import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";

export default () => {
  [variable, setVariable] = useState(0);

  const fetchData = async () => {
    const data = await fetch(
      "https://s4-8060.nuage-peda.fr/ShareMelanie/Share/public/api"
    );
    const dataJSON = await data.json();

    setVariable(dataJSON);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <View>
      <Header />
      <Text>Coucouu Hello</Text>
      <Text>{variable.test}</Text>
    </View>
  );
};
