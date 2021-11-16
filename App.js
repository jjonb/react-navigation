import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Details", {
            itemId: 0,
            otherParam: "Originally passed Param",
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params; // Get the params.
  const [paramsChange, setParamButton] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title={"Change the Params"}
        onPress={() => {
          setParamButton(!paramsChange);
          navigation.setParams({
            itemId: paramsChange ? 100 : 0,
            otherParam: paramsChange
              ? "Changed Param"
              : "Originally passed Param",
          });
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import * as React from "react";
// import { Button, View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function HomeScreen({ navigation: { navigate } }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>This is the home screen of the app</Text>
//       <Button
//         onPress={() =>
//           navigate("Profile", {
//             friends: ["Brent", "Satya", "Michaś"],
//             title: "Brent's Profile",
//           })
//         }
//         title="Go to Brent's profile"
//       />
//     </View>
//   );
// }

// function ProfileScreen({ navigation, route }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Profile Screen</Text>
//       <Text>Friends: </Text>
//       <Text>{route.params.friends[0]}</Text>
//       <Text>{route.params.friends[1]}</Text>
//       <Text>{route.params.friends[2]}</Text>
//       <Button
//         onPress={() =>
//           navigation.setParams({
//             friends:
//               route.params.friends[0] === "Brent"
//                 ? ["Wojciech", "Szymon", "Jakub"]
//                 : ["Brent", "Satya", "Michaś"],
//             title:
//               route.params.title === "Brent's Profile"
//                 ? "Lucy's Profile"
//                 : "Brent's Profile",
//           })
//         }
//         title="Swap title and friends"
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={({ route }) => ({ title: route.params.title })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
