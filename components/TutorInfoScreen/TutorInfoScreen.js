import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Button,
  ScrollView,
} from "react-native";
import { useTutors } from "../../context/tutorContext";
import { useState, useEffect, useCallback } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";

const AnimatedIcon = Animated.createAnimatedComponent(MaterialIcons);

function TutorInfoScreen({ route }) {
  const [allTutors] = useTutors();
  const tutor = allTutors.find((item) => item.id === route.params.id);

  const [heartIcon, setHeartIcon] = useState(false);
  const scale = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 1) }],
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(2, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withSpring(1);
      }
    });
    setHeartIcon(!heartIcon);
  }, [heartIcon]);

  if (!tutor) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container} edges={["right", "left"]}>
        <ScrollView>
          <TapGestureHandler numberOfTaps={2} onActivated={onDoubleTap}>
            <View style={styles.imageContainer}>
              <Animated.View>
                <ImageBackground
                  source={{ uri: tutor.image }}
                  style={styles.image}
                  imageStyle={{
                    borderRadius: 125,
                    borderWidth: 2,
                    borderColor: "#fff",
                  }}
                />
                {heartIcon ? (
                  <AnimatedIcon
                    name="favorite"
                    size={33}
                    color="red"
                    style={[styles.favIcon, animatedStyle]}
                  />
                ) : (
                  <MaterialIcons
                    name="favorite"
                    size={33}
                    color="#b0b0b0"
                    style={styles.favIcon}
                  />
                )}
              </Animated.View>
            </View>
          </TapGestureHandler>
          <View>
            <Text style={styles.name}>{tutor.tutor}</Text>
            <Text style={styles.program}>{tutor.program}</Text>
            <Text style={styles.program}>{tutor.school}</Text>
          </View>
          <View
            style={{ borderWidth: 0.5, borderColor: "#b0b0b0", marginTop: 16 }}
          ></View>
          <Text style={styles.book}>My Availability</Text>
          <View>
            <Text style={styles.selectDate}>Select Date</Text>
            <DateTimePicker
              accentColor={"darkgreen"}
              locale={"en-CA"}
              display={"inline"}
              mode={"date"}
              minimumDate={new Date(2022, 11, 11)}
              maximumDate={new Date(2022, 12, 20)}
              value={new Date()}
              style={{
                borderColor: "#f1f1f1",
                borderWidth: 1.5,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.timePicker}>
            <Text style={styles.selectTime}>Select Time</Text>
            <DateTimePicker
              display={"compact"}
              accentColor={"darkgreen"}
              locale={"en-CA"}
              mode={"time"}
              value={new Date()}
              style={{
                borderColor: "#f1f1f1",
                borderWidth: 1.5,
                borderRadius: 10,
              }}
            />
          </View>
          <Button title="Book" style={styles.button} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e2e2",
    alignItems: "center",
    height: "100%",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  image: {
    height: 250,
    width: 250,
    resizeMode: "contain",
  },
  favIcon: {
    position: "absolute",
    right: 50,
    bottom: 1,
  },
  name: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  program: {
    textAlign: "center",
    fontSize: 16,
    padding: 1,
  },
  book: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 16,
    fontWeight: "bold",
  },
  scroll: {
    marginVertical: 12,
  },
  selectDate: {
    fontSize: 15,
    marginTop: 16,
    marginBottom: 12,
    fontWeight: "bold",
  },
  timePicker: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  selectTime: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    marginVertical: 16,
    paddingTop: 16,
  },
});

export default TutorInfoScreen;
