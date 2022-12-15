import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SessionCard({ session }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.card}>
        <View>
          <Image source={{ uri: session.image }} style={styles.image} />
        </View>
        <View style={styles.sessionInfo}>
          <View style={styles.tutorInfo}>
            <Text style={styles.name}>{session.tutor}</Text>
            <Text style={styles.program}>{session.program}</Text>
          </View>
          <View style={styles.appointment}>
            <View style={styles.appointmentDate}>
              <Ionicons name="md-calendar-sharp" size={18} color="#016064" />
              <Text style={styles.date}>{session.date}</Text>
            </View>
            <View style={styles.appointmentTime}>
              <Ionicons
                name="ios-time-outline"
                size={18}
                color="#016064"
                style={styles.icon}
              />
              <Text style={styles.time}>{session.time}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 8,
    paddingTop: 2,
    backgroundColor: "#e2e2e2",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    display: "flex",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.25 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  sessionInfo: {
    flexShrink: 1,
    justifyContent: "center",
  },
  tutorInfo: {
    paddingLeft: 16,
  },
  name: {
    fontSize: 19,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  program: {
    fontSize: 16,
    paddingBottom: 13,
  },
  appointment: {
    flexDirection: "row",
    paddingLeft: 16,
    paddingBottom: 4,
  },
  appointmentDate: {
    flexDirection: "row",
    alignItems: "center",
  },
  appointmentTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    paddingLeft: 2,
  },
  time: {
    paddingLeft: 2,
  },
  icon: {
    paddingLeft: 16,
  },
});

export default SessionCard;
