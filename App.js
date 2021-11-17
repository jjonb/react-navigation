import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function JesseScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={JesseStyles.profilePic}
        source={{ uri: "https://wallpaperaccess.com/full/187161.jpg" }}
      />
      <View>
        <Text>alaal</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={JesseStyles.button}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

function SergutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={SergutStyles.profilePic}
        source={require("./Images/sergutPic.jpg")}
      />
      <View>
        <Text>
          Hello, my name is Sergut Tibebu, I am an Ethiopian American a mother
          of two children, resides in the State of Virginia, self-motivated and
          hard-working individual. I am React Native Apprentice at
          Alpha-works/Bitwise Industries currently learning how to code and
          develope websites. My hobbies, cooking, travelling, listening to
          music.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={SergutStyles.button}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

function LindaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={LindaStyles.profilePic}
        source={{ uri: "https://wallpaperaccess.com/full/187161.jpg" }}
      />
      <View style={LindaStyles.bioContainer}>
        <Text>
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={LindaStyles.button}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

function AmelScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={AmelStyles.profilePic}
        source={{ uri: "https://wallpaperaccess.com/full/187161.jpg" }}
      />
      <View>
        <Text>
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
          JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk JDdfjksflk
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={AmelStyles.button}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Jesse");
        }}
      >
        <Text>Jesse</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Sergut");
        }}
      >
        <Text>Sergut</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Linda");
        }}
      >
        <Text>Linda</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Amel");
        }}
      >
        <Text>Amel</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Jesse"
          component={JesseScreen}
          options={{
            title: "Jesse",
          }}
        />
        <Stack.Screen
          name="Sergut"
          component={SergutScreen}
          options={{
            title: "Sergut",
          }}
        />
        <Stack.Screen
          name="Linda"
          component={LindaScreen}
          options={{
            title: "Linda",
          }}
        />
        <Stack.Screen
          name="Amel"
          component={AmelScreen}
          options={{
            title: "Amel",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    margin: 5,
    padding: 5,
    //borderRadius: 50,
  },
  profilePic: { width: 100, height: 100 },
  bioContainer: {
    margin: 10,
  },
  bioText: {
    margin: 10,
  },
});

const JesseStyles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    margin: 5,
    padding: 5,
    //borderRadius: 50,
  },
  profilePic: { width: 100, height: 100 },
});

const SergutStyles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: "pink",
    margin: 8,
    padding: 10,
    borderRadius: 40,
    marginTop: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  about: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
  },
});

const LindaStyles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    margin: 5,
    padding: 5,
    //borderRadius: 50,
  },
  profilePic: { width: 100, height: 100 },
});

const AmelStyles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    margin: 5,
    padding: 5,
    //borderRadius: 50,
  },
  profilePic: { width: 100, height: 100 },
});
export default App;

// function HomeScreen({ navigation }) {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "grey",
//       }}
//     >
//       <Text style={{ color: "white", fontSize: 20 }}>Home Screen</Text>
//       <Button
//         title="Go to Second Screen"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate("Details", {
//             itemId: 0,
//             otherParam: "Originally passed Param",
//           });
//         }}
//         color="#823"
//       />
//     </View>
//   );
// }
// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={{ uri: "https://wallpaperaccess.com/full/187161.jpg" }}
//     />
//   );
// }
// function DetailsScreen({ route, navigation }) {
//   const { itemId, otherParam } = route.params; // Get the params.
//   const [paramsChange, setParamButton] = useState(false);
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "grey",
//       }}
//     >
//       {/* <Text style={{ color: "white", fontSize: 20 }}>Second Screen</Text> */}
//       <Text style={{ color: "white", fontSize: 20 }}>
//         itemId: {JSON.stringify(itemId)}
//       </Text>
//       <Text style={{ color: "white", fontSize: 20 }}>
//         otherParam: {JSON.stringify(otherParam)}
//       </Text>
//       <Button
//         title={"Change the Params"}
//         color="#823"
//         onPress={() => {
//           setParamButton(!paramsChange);
//           navigation.setParams({
//             itemId: paramsChange ? 100 : 0,
//             otherParam: paramsChange
//               ? "Changed Param"
//               : "Originally passed Param",
//           });
//         }}
//       />
//       <Button
//         title="Go back"
//         color="#823"
//         onPress={() => navigation.goBack()}
//       />
//     </View>
//   );
// }
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: "Home",
//             headerStyle: {
//               backgroundColor: "#f4511e",
//             },
//             headerTintColor: "#fff",
//             // headerTitle: (props) => <LogoTitle {...props} />,
//             headerRight: () => (
//               <Button
//                 onPress={() => alert("This is a button!")}
//                 title="Info"
//                 color="#823"
//               />
//             ),
//           }}
//         />
//         <Stack.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{
//             title: "Second Screen",
//             headerStyle: {
//               backgroundColor: "#f4511e",
//             },
//             headerTintColor: "#fff",
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

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
