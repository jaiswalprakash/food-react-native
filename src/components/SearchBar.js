import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroudStyle}>
      <Feather name="search" style={styles.IconStyle}></Feather>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroudStyle: {
    marginTop: 10,
    backgroundColor: "white",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
  },
  IconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
