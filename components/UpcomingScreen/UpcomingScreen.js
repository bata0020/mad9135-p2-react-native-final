import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { upcomingSessions } from "../../dataSource/data";

import SessionItem from "../SessionItem/SessionItem";

function UpcomingScreen({ navigation }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(upcomingSessions);
  }, []);

  if (!sessions) {
    return null;
  } else {
    return (
      <SafeAreaView edges={["right", "left"]} style={styles.container}>
        <FlatList
          data={sessions.sort((a, b) => {
            return a.schedule > b.schedule ? 1 : -1;
          })}
          renderItem={({ item }) => (
            <SessionItem
              session={item}
              onPress={() =>
                navigation.navigate("SessionDetails", { id: item.id })
              }
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
  },
});

export default UpcomingScreen;
