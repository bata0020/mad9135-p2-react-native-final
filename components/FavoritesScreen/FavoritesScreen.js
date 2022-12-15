import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, FlatList, RefreshControl } from "react-native";
import { useEffect, useState } from "react";
import { useTutors } from "../../context/tutorContext";
import TutorCard from "../TutorCard/TutorCard";

function FavoritesScreen() {
  const [data] = useTutors();
  const [refreshing, setRefreshing] = useState(true);
  const [favoriteTutor, setFavoriteTutor] = useState([]);

  useEffect(() => {
    setFavoriteTutor(data.filter((person) => person.favorite === true));
    setRefreshing(false);
  }, []);

  if (!data) {
    return null;
  } else if (favoriteTutor.length === 0) {
    return (
      <SafeAreaView style={styles.empty} edges={["right", "left"]}>
        <Text>Favorite tutors will appear here!</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container} edges={["right", "left"]}>
        <FlatList
          data={favoriteTutor}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() =>
                setFavoriteTutor(
                  data.filter((person) => person.favorite === true)
                )
              }
            />
          }
          renderItem={({ item }) => <TutorCard tutor={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e2e2",
    height: "100%",
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2e2e2",
  },
});

export default FavoritesScreen;
