import { StyleSheet, SafeAreaView, View, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';

const HomeScreen = () => {
  return (
    <ScrollView style={{marginTop: 50}}>
      {/* Searvh Bar */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: 1, margin: 10, padding: 10, borderColor: "#C0C0C0", borderRadius: 7 }}>
        <TextInput style={{ fontSize: 17 }} placeholder='Search for Restaurant item or more.' />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>

      {/* Image slider component */}
      <Carousel />

      {/* Food Item Types Component */}
      <FoodTypes />

      {/* Quick Food Component */}
      <QuickFood />

    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;

