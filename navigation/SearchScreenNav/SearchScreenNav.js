import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../../components/SearchScreen/SearchScreen";
import TutorInfoScreen from "../../components/TutorInfoScreen/TutorInfoScreen";

const Stack = createStackNavigator();

function SearchScreenNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#127369",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 16,
        },
      }}
    >
      <Stack.Screen name="Search Tutors" component={SearchScreen} />
      <Stack.Screen name="Details" component={TutorInfoScreen} />
    </Stack.Navigator>
  );
}

export default SearchScreenNav;
