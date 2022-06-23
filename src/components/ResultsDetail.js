import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import resturent from "../consts/resturent";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      {/* <Image source={{uri:"require(".")"}}></Image> */}
      <Image
        style={styles.image}
        source={require("../../assets/r1.jpg")}
      ></Image>
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating || 4} Stars,{result.review_count || 1145} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 200,
    borderRadius: 4,
    height: 120,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    // fontSize: 16,
  },
});

export default ResultsDetail;
