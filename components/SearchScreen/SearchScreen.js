import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Text,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { useTutors } from "../../context/tutorContext";
import TutorCard from "../TutorCard/TutorCard";

function SearchScreen({ navigation }) {
  const [data] = useTutors();
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!searchValue) {
      setFilteredResults([]);
    }
  }, [searchValue]);

  function handleSubmit() {
    if (!searchValue) {
      return null;
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 800);
      const result = data.filter((object) => {
        return (
          object.tutor.toLowerCase().includes(searchValue.toLowerCase()) ||
          object.program.toLowerCase().includes(searchValue.toLowerCase()) ||
          object.tag.toLowerCase().includes(searchValue.toLocaleLowerCase())
        );
      });
      if (result.length != 0) {
        setFilteredResults(result);
        setLoading(true);
      } else {
        Alert.alert(
          "No Results Found",
          "There are no tutors who matched your search criteria",
          [{ text: "OK", style: "default" }]
        );
      }
    }
  }

  if (filteredResults.length === 0) {
    return (
      <SafeAreaView edges={["right", "left"]} style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type Here"
          autoFocus={true}
          onChangeText={(text) => setSearchValue(text)}
          value={searchValue}
          onSubmitEditing={handleSubmit}
          clearButtonMode="always"
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.text}>
            <Text>Search Program Name or Tutor Name above.</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView edges={["right", "left"]} style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type Here"
          autoFocus={true}
          onChangeText={(text) => setSearchValue(text)}
          value={searchValue}
          onSubmitEditing={handleSubmit}
          clearButtonMode="always"
        />
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#228c22" />
          </View>
        ) : (
          <FlatList
            data={filteredResults.sort((a, b) => {
              return a.id > b.id ? 1 : -1;
            })}
            renderItem={({ item }) => (
              <TutorCard
                tutor={item}
                onPress={() => navigation.navigate("Details", { id: item.id })}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e2e2",
    height: "100%",
  },
  input: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#318C83",
    borderWidth: 1.5,
    fontSize: 16,
    marginVertical: 10,
    padding: 10,
    width: "95%",
  },
  text: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;
