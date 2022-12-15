import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { pastSessions } from "../../dataSource/data";
import SessionItem from "../SessionItem/SessionItem";

function PastScreen() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(pastSessions);
  }, []);

  if (!sessions) {
    return null;
  } else {
    return (
      <SafeAreaView edges={["right", "left"]} style={styles.container}>
        <FlatList
          data={sessions.sort((a, b) => {
            return a.schedule < b.schedule ? 1 : -1;
          })}
          renderItem={({ item }) => <SessionItem session={item} />}
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

export default PastScreen;
