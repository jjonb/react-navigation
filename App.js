import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

function JesseScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={JesseStyles.profilePic}
        source={require("./Images/jesse.jpg")}
      />
      <View>
        <Text>
          My name is Jesse Bellido. Born and raised in San Jose, CA. Currently,
          I'm a react native apprentice for AlphaWorks. My favorite thing to do
          outside of work is to game or to take walks around my local lake. I'm
          very excited to be here and to learn and grow with my team right
          beside me.
        </Text>
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
          Hello this is Sergut, a React Native Developer Apprentice at
          Alphaworks Tech. I like to code and on my free time I like to cook.
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
    <View style={LindaStyles.profileContainer}>
      <Image
        style={LindaStyles.profilePic}
        source={require("./Images/lindaPic.jpeg")}
      />
      <View style={LindaStyles.bioContainer}>
        <Text style={LindaStyles.bioText}>
          Hi! My name is Linda! I live in Fresno, Ca. I have 3 children and 2
          fur babies. I am a huge K-pop and K-drama lover. I love to eat, cook
          and bake. One of my favorite things to do for fun is going on food
          adventures.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={LindaStyles.button}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
      <View style={LindaStyles.socialIcons}>
        <Ionicons name="logo-facebook" size={32} color="#2867b2" />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.linkedin.com/in/linda-k-westphal-1aba9a1b5?trk=public_profile_samename-profile"
            );
          }}
        >
          <Ionicons name="logo-linkedin" size={32} color="#2867b2" />
        </TouchableOpacity>
        <Ionicons name="logo-instagram" size={32} color="#2867b2" />
        <Ionicons name="logo-twitter" size={32} color="#2867b2" />
      </View>
    </View>
  );
}

function AmelScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 30,
        backgroundColor: "#efd595",
        borderWidth: 3,
        borderColor: "#C5834C",
        borderRadius: 15,
      }}
    >
      <Image
        style={AmelStyles.profilePic}
        source={require("./Images/profile.jpg")}
      />
      <View style={{ marginTop: 20 }}>
        <View>
          <Text style={AmelStyles.about}>About me</Text>
        </View>
        <Text
          style={{
            marginRight: 20,
            marginLeft: 20,
            alignItems: "center",
            lineHeight: 30,
            borderStyle: "dotted",
          }}
        >
          I'm Amel Alemu,in my current role at AlphaWorks-Bitwise industries, I
          am an apprentice and a web developer in the React Native environment.
          I am originally from Ethiopia and currently reside in the Bay area. My
          excitement at this opportunity is overwhelming.
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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bed9e394",
        borderWidth: 2,
        borderColor: "#C5834C",
        margin: 8,
        borderRadius: 15,
      }}
    >
      <Text style={{ fontSize: 25, marginBottom: 15 }}>Meet our team!</Text>
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
    backgroundColor: "#2b69f3ad",
    margin: 5,
    padding: 8,

    borderRadius: 10,
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
  button: {
    backgroundColor: "blue",
    margin: 5,
    padding: 5,
    //borderRadius: 50,
  },
  profilePic: { width: 100, height: 100 },
});

const LindaStyles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 30,
    backgroundColor: "lavenderblush",
    borderWidth: 3,
    borderColor: "lightgrey",
    borderRadius: 15,
  },
  button: {
    backgroundColor: "lightgrey",
    margin: 8,
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 25,
    borderWidth: 0.5,
    borderColor: "lightgrey",
  },
  bioContainer: {
    margin: 10,
  },
  bioText: {
    margin: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "normal",
  },
  socialIcons: {
    flexDirection: "row",
    marginTop: 50,
  },
});

const AmelStyles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: "coral",
    margin: 8,
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 25,
  },
  about: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
  },
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
