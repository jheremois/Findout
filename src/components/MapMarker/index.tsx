import { AppColors } from '@src/shared/styles/AppDefaults';
import { AppStyles } from '@src/shared/styles/AppStyles';
import React, { useState, useEffect } from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View, Pressable, Vibration } from 'react-native';
import MapView, { Callout, Marker, Polyline } from 'react-native-maps';
import { Ionicons } from "@expo/vector-icons";

interface props{
  coords_lat: number
  coords_lon: number
  setPoiLine: any
  color: string

}

export default function MapMarker(props: props) {

  const {coords_lat, coords_lon, setPoiLine, color} = props

  return(
    <Marker 
      onPress={(e)=>{
        Vibration.vibrate(40)
      }}
      coordinate={{
        latitude: coords_lat,
        longitude: coords_lon,
      }}
      key={5}
      pinColor={color}
    >
      <Callout
        onPress={(e)=>{
          setPoiLine(e.nativeEvent.coordinate);
        }}
        tooltip={true}
        style={[
          AppStyles.shadowM,
          AppStyles.alignCenter,
          AppStyles.contentCenter,
        ]}
      >
        <View
          style={[
              AppStyles.alignCenter,
              AppStyles.contentCenter,
          ]}
        >
          <>
              <View
                  style={[
                      {
                        borderWidth: 1,
                        borderColor: "#f0f0f010",
                      },
                      AppStyles.shadowM,
                      {height: 50, width: Dimensions.get("screen").width / 2, overflow: "hidden"},
                      AppStyles.bgGray,
                      AppStyles.flexRow,
                      AppStyles.contentBetween,
                      AppStyles.roundedM
                  ]}
              >
                  <View
                      style={[
                          AppStyles.paddingMX,
                          AppStyles.bgGray,
                          AppStyles.flexRow,
                          AppStyles.alignCenter,
                          AppStyles.contentCenter,
                      ]}
                  >
                    <Text
                      style={[
                        AppStyles.textWhite,
                        AppStyles.fontM,
                        {
                          fontSize: 14,
                        }
                      ]}
                    >
                        Get directions
                    </Text>
                  </View>
                  <View
                      style={[
                        AppStyles.paddingSX,
                        AppStyles.bgBlue,
                        AppStyles.alignCenter,
                        AppStyles.contentCenter,
                      ]}
                  >
                      <Ionicons 
                          name={"arrow-forward"}
                          color={"white"}
                          size={24}
                      />      
                  </View>
              </View>
              <View
                  style={[
                    {
                      width: 0,
                      height: 0,
                      borderLeftWidth: 10,
                      borderRightWidth: 10,
                      borderTopWidth: 20,
                      borderStyle: 'solid',
                      backgroundColor: 'transparent',
                      borderLeftColor: 'transparent',
                      borderRightColor: 'transparent',
                      borderTopColor: AppColors.gray
                    }
                  ]}
              >

              </View>
          </>
        </View>
      </Callout>
    </Marker>
  )
  
}