import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import RESTURNENT_LIST from "../consts/resturent";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const detail = () => {
    return RESTURNENT_LIST.find((e) => {
      return e.id === id;
    });
  };
  useEffect(() => {
    let data = detail();
    setResult(data);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>Name:{result.name}</Text>
      <Text>id:{result.id}</Text>
      <Text>price:{result.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultShowScreen;
