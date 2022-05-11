import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Widget from "./src/components/Widget";
import { theme } from "./src/theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    // return AppLoading;
    return <Text>loading</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Widget />
    </View>
  );
}
