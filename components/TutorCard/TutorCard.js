import { View, Text, Image, StyleSheet, Pressable } from "react-native";

function TutorCard({ tutor, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.card}>
        <View>
          <Image source={{ uri: tutor.image }} style={styles.image} />
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.tutorInfo}>
            <Text style={styles.name}>{tutor.tutor}</Text>
            <Text style={styles.program}>{tutor.program}</Text>
            <Text style={styles.school}>{tutor.school}</Text>
            <Text>{tutor.course}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#e2e2e2",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 1.5,
    borderColor: "#957171",
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
  cardInfo: {
    flexShrink: 1,
    justifyContent: "center",
  },
  tutorInfo: {
    paddingLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 2,
  },
  program: {
    fontSize: 16,
  },
  school: {
    fontSize: 16,
    paddingBottom: 8,
  },
});

export default TutorCard;
