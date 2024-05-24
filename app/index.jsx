import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "../components/header";
import Input from "../components/input/input";
import Button from "../components/button";

export default function Index() {
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  return (
    <View style={styles.container}>
      <Header />
     
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.content}>
          <View style={styles.inputs}>
           
          <Input
          label="Height(cm) 📏"
          placeholder="Enter your height"
          value={height}
          onChangeText={(text) => {
            setHeight(text);
          }}
          />
          <Input
          label="Weight(kg) ⚖️"
          placeholder="Enter your weight"
          value={weight}
          onChangeText={(text) => {
            setWeight(text);
          }}
          />
          </View>
          <Button label="Calculate" 
          href={{
            pathname: "/result",
            params: {
              height,
              weight,
            },
          }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F5",
  },
  content: {
    flex: 1,
    padding: 32,
    justifyContent: "space-between",
  },
  inputs: {
    gap: 60,
  },
});
