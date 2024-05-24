import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import Header from "../components/header";

import Button from "../components/button";
import { CardBmiResult, CardValue } from "../components/card";

const BmiResult = ({ title, subtitle, bgColor }) => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: bgColor,
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 14,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};
export default function Index() {
  const {height, weight} = useLocalSearchParams();

  const heightInMeters = height / 100

  const bmi = weight / (heightInMeters ** 2)

  const bmiTable = [
    {
      max: Infinity,
      classification: "Level III obesity",
      color: "#FF7262",
      subtitle: "⚠️ Here the signal is red, with a strong probability that there are already very serious diseases associated. Treatment must be even more urgent.",
    },
    {
      max: 39.9,
      classification: "Level II obesity",
      color: "#FF7262",
      subtitle: "🔴 Even if your exams appear to be normal, it's time to take care of yourself, starting lifestyle changes with the close monitoring of health professionals.",
    },
    {
      max: 34.9,
      classification: "Level I obesity",
      color: "#FF7262",
      subtitle: "🟠 Warning sign! It's time to take care of yourself, even if your exams are normal. Let's start changes today! Take care of your diet. You need to start monitoring with a nutritionist and/or endocrinologist.",
    },
    {
      max: 29.9,
      classification: "Overweight",
      color: "#FDB32A",
      subtitle: "🥗 It is, in fact, pre-obesity and many people in this range already have associated diseases, such as diabetes and hypertension. It is important to review habits and seek help before, due to a series of factors, you enter the obesity range for real.",
    },
    {
      max: 24.9,
      classification: "Normal weight",
      color: "#75BF72",
      subtitle: "💪 I'm glad you're at a normal weight! And the best way to keep it that way is by maintaining an active lifestyle and a balanced diet.",
    },
    {
      max: 18.5,
      classification: "Under weight",
      color: "#FDB32A",
      subtitle: " 🧑‍⚕️ Look for a doctor. Some people are underweight due to their body characteristics and that's okay. Others may be facing problems such as malnutrition. You need to know what the case is.",
    },
  ];

  const bmiResult = bmiTable.reduce((previousValue, currentValue) => {

    if (bmi <= currentValue.max) {

      return currentValue
    }
    return previousValue;
  }, '-');

  return (
    <View style={styles.container}>

      <Header />

      <View 
      style={{
        flex: 1,
        padding: 32,
        justifyContent: "space-between",
        gap: 8,
      }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 8,
          }}
        >
          <CardValue value={height} label="📏 Height (cm)" />
          <CardValue value={weight} label="⚖️ Weight (kg)" />
        </View>

        <CardBmiResult bmi={bmi}  />

        <BmiResult 
        title= {bmiResult.classification} 
        subtitle={bmiResult.subtitle} 
        bgColor={bmiResult.color}
        />
      <Button label="Return" 
          href={{
            pathname: "/",
          }}
          />
      </View>
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
});
