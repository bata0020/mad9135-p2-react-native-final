import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TutorProvider } from "./context/tutorContext";

//Screens
import HomeScreenNav from "./navigation/HomeScreenNav/HomeScreenNav";
import SearchScreenNav from "./navigation/SearchScreenNav/SearchScreenNav";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <TutorProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Dashboard") {
                  iconName = focused ? "ios-home" : "ios-home-outline";
                } else if (route.name === "Search") {
                  iconName = focused ? "ios-search" : "ios-search-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              headerStyle: {
                backgroundColor: "#127369",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontSize: 16,
              },
              tabBarStyle: { backgroundColor: "#10403B" },
              tabBarActiveTintColor: "#fff",
              tabBarInactiveTintColor: "#bfbfbf",
            })}
          >
            <Tab.Screen name="Dashboard" component={HomeScreenNav} />
            <Tab.Screen
              name="Search"
              component={SearchScreenNav}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
      </TutorProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e2e2",
  },
});
