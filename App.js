import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TutorProvider } from "./context/tutorContext";

//Screens

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <TutorProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen />
            <Tab.Screen />
            <Tab.Screen />
          </Tab.Navigator>
        </NavigationContainer>
      </TutorProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e2e2",
  },
});
