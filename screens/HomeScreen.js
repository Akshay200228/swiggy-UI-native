import { StyleSheet, View, TextInput, ScrollView, Pressable, Text } from 'react-native';
import React from 'react';
// Icons
import { Ionicons } from '@expo/vector-icons';

// Data
import hotels from '../data/hotels'

import { AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import MenuItem from '../components/MenuItem';

const HomeScreen = () => {
  const data = hotels;

  return (
    <ScrollView style={{ marginTop: 50 }}>
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

      {/* Filter Buttons Component */}

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
        {/* Btn 1 */}
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
            justifyContent: "center",
          }}
        >
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>

        {/* Btn 2 */}
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
            justifyContent: "center",
          }}
        >
          <Text style={{ marginRight: 6 }}>Sort By Rating</Text>
        </Pressable>

        {/* Btn 3 */}
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
            justifyContent: "center",
          }}
        >
          <Text style={{ marginRight: 6 }}>Sort By Price</Text>
        </Pressable>
      </View>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;

