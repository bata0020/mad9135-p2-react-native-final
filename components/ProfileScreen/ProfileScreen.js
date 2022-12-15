import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Image, View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import { BlurView } from "expo-blur";

function ProfileScreen() {
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Please allow access.");
      }
    })();
    requestPermission();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      alert("You did not select an image.");
    }
  };

  const takePhoto = async () => {
    let options = {
      quality: 1,
      allowsEditing: true,
      exif: false,
    };
    let newPhoto = await ImagePicker.launchCameraAsync(options);
    setImage(newPhoto.assets[0].uri);
  };

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <Image
        source={require("../../assets/mind-blown.png")}
        style={[StyleSheet.absoluteFill, styles.blur]}
      />
      <BlurView intensity={100}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Image
            source={require("../../assets/mind-blown.png")}
            style={styles.image}
          />
        )}
        <Text style={styles.myName}>Leo Antonio Batan</Text>
        <Text style={styles.details}>
          Mobile Application Design and Development
        </Text>
        <Text style={styles.details}>MAD9135 Final Project</Text>
        <View style={styles.editPhoto}>
          <Text style={{ fontSize: 16, marginBottom: 16 }}>
            Change Profile Photo
          </Text>
          <View style={styles.buttons}>
            <View style={{ paddingBottom: 15 }}>
              <Button title="Take A Photo" onPress={takePhoto} />
            </View>
            <View>
              <Button title="Pick From Library" onPress={pickImage} />
            </View>
          </View>
        </View>
      </BlurView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2e2e2",
    height: "100%",
  },
  blur: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  image: {
    height: 250,
    width: 250,
    marginVertical: 16,
  },
  myName: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 4,
  },
  details: {
    fontSize: 18,
    marginVertical: 1,
  },
  editPhoto: {
    alignItems: "center",
    marginVertical: 70,
  },
});

export default ProfileScreen;
