import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsScreen from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [serachApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => serachApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsScreen
          headerText="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsScreen
          headerText="Bit Pricier"
          results={filterResultsByPrice("$$")}
        />
        <ResultsScreen
          headerText="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
        <ResultsScreen
          headerText="Most Expensive"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
