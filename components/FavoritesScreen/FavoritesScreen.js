import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useTutors } from "../../context/tutorContext";
import TutorCard from "../TutorCard/TutorCard";

function FavoritesScreen() {
  const [data] = useTutors();
  const [favoriteTutor, setFavoriteTutor] = useState([]);

  useEffect(() => {
    setFavoriteTutor(data);
  }, []);

  const faves = favoriteTutor.filter((person) => person.favorite === true);

  if (!data) {
    return null;
  } else if (faves.length === 0) {
    return (
      <SafeAreaView style={styles.empty} edges={["right", "left"]}>
        <Text>Favorite tutors will appear here!</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container} edges={["right", "left"]}>
        <FlatList
          data={faves}
          renderItem={({ item }) => (
            <TutorCard
              tutor={item}
              onLongPress={() => console.log((item.favorite = !item.favorite))}
            />
          )}
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
