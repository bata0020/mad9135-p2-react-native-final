import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UpcomingScreen from "../../components/UpcomingScreen/UpcomingScreen";
import PastScreen from "../../components/PastScreen/PastScreen";
import FavoritesScreen from "../../components/FavoritesScreen/FavoritesScreen";

const Tab = createMaterialTopTabNavigator();

function HomeScreenNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderRadius: 50,
          width: "96%",
          alignSelf: "center",
          justifyContent: "center",
          alignContent: "center",
          margin: 8,
        },
        tabBarIndicatorStyle: {
          top: 0,
          height: null,
          borderRadius: 50,
          backgroundColor: "#127369",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#808080",
      }}
      style={{ backgroundColor: "#e2e2e2" }}
    >
      <Tab.Screen name="Upcoming" component={UpcomingScreen} />
      <Tab.Screen name="Past" component={PastScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreenNav;
