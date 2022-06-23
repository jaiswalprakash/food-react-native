import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

import { withNavigation } from "react-navigation";

const ResultsScreen = ({ headerText, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titalStyle}> {headerText}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titalStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsScreen);
