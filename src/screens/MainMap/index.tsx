import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, Pressable, Vibration } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { mapStyle } from '@helpers/consts';
import { locationType, mapLocationType } from '@src/shared/interfaces/locationType';
import { AppColors } from '@src/shared/styles/AppDefaults';
import MapMarker from '@src/components/MapMarker';
import MapViewDirections from 'react-native-maps-directions';
import { api_key } from '@src/config/env';

export default function MainMap() {

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [myLocation, setMyLocation] = useState({
    latitude: 0,
    latitudeDelta: 0,
    longitude: -68.9908963,
    longitudeDelta: 0.0021,
  })

  const [myMarker, setMyMarker] = useState({
    latitude: 0,
    longitude: 0,
  }) 

  const [poiLine, setPoiLine] = useState({ 
    latitude: 0,
    longitude: 0
  })

  const getMyLoc = async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await (await Location.getCurrentPositionAsync({}));

    setMyLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021, 
    })
    
    setMyMarker({
      latitude: location.coords.latitude + 0.032,
      longitude: location.coords.longitude + 0.03,
    })
  }

  useEffect(() => {
    getMyLoc()
    console.log(myLocation)
  }, []);


  const locations = [
    {
      coords_lat: myLocation.latitude + 0.046, 
      coords_lon: myLocation.longitude - 0.2
    },
    {
      coords_lat: myLocation.latitude + 0.2, 
      coords_lon: myLocation.longitude - 0.09
    },
    {
      coords_lat: myLocation.latitude + 0.08, 
      coords_lon: myLocation.longitude + 0.09
    },
  ]

  return (
        myLocation.latitude !== 0 || errorMsg !== null
        ?
        <View
          style={
            [
              {
                justifyContent: "center",
                alignItems: "center",
              }
            ]
          }
        >
          <MapView
            onPress={
              (e) => {
                setPoiLine({
                  latitude: 0,
                  longitude: 0,
                })
                setMyMarker(
                  {
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                  }
                )
              }
            }
            customMapStyle={mapStyle}
            style={[styles.map]}
            initialRegion={myLocation}
          >
            {
              locations.map((location, i)=>(
                <MapMarker key={i} setPoiLine={setPoiLine} color="green" coords_lat={location.coords_lat} coords_lon={location.coords_lon}/>
              ))
            }
            <Marker 
              onPress={()=>{
                Vibration.vibrate(40)
              }}
              coordinate={{latitude: myLocation.latitude, longitude: myLocation.longitude}}
              key={2}
              pinColor={AppColors.indigo}
            />
            {
              poiLine.longitude !== 0 && poiLine.longitude !== 0
              &&
              
              <MapViewDirections
                strokeColor="#f0f0f080"
                strokeWidth={6}
                origin={{ latitude: myLocation.latitude, longitude: myLocation.longitude}}
                destination={{ latitude: poiLine.latitude, longitude: poiLine.longitude}}
                apikey={api_key}
              /> 
              /* 
              <Polyline
                geodesic={true}
                coordinates={[
                  { latitude: myLocation.latitude, longitude: myLocation.longitude},
                  { latitude: poiLine.latitude, longitude: poiLine.longitude}
                ]}
                strokeColor="#f0f0f080"
                strokeWidth={6}
              />
              */
            }
          </MapView>
          
          <View
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              top: 10,
            }}
          >
            <Pressable
              style={{
                borderWidth: 3,
                borderColor: "#f0f0f040",
                paddingHorizontal: 12,
                alignItems: "center",
                borderRadius: 300,
                paddingVertical: 3,
                backgroundColor: "#51515170"
              }}
            >
                <Text
                  style={{color: "#f0f0f0", fontWeight: "700", fontSize: 16}}
                >
                  {"La Romana"}
                </Text>
            </Pressable>
          </View>
        </View>
        :
        <View>
          <Text>
            Map View
          </Text>
        </View>
  )
}

const styles = StyleSheet.create({
   map: {
     width: Dimensions.get("screen").width,
     height: Dimensions.get("screen").height - 80,
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
   }, 
});
