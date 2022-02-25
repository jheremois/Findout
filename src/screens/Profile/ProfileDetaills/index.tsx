import React, { useState, useEffect } from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';
import { AppColors } from "@src/shared/styles/AppDefaults";

const Settings = ()=>{
    
    const navigation = useNavigation()

    const Option = ({icon, name, action}: any)=>{

        return(
            <Pressable 
                onPress={ action }
                style={({ pressed }) =>[
                    {
                        flexDirection: "row",
                        padding: 20,
                        width: "100%",
                        borderBottomWidth: 2,
                        borderColor: "#11111120",   
                        alignItems: "center",
                    },
                    pressed
                        ?
                            {
                                backgroundColor: `${AppColors.blue + 10}`
                            }
                        :
                            {
                                backgroundColor: `${AppColors.black}`
                            },
                ]}
            >
                <Ionicons 
                    name={icon}
                    color={"white"}
                    size={22}
                />
                <Text
                    style={{color: "#f0f0f0", textAlign: "center", fontSize: 17.6, fontWeight: "700", paddingHorizontal: 10}}   
                >
                    {name}
                </Text>
            </Pressable>
        )
    }

    return(
        <View>
            <View>
                <Option icon="people-outline" name="Friends" action={()=> navigation.navigate('friendsChats')} />
                <Option icon="pencil-outline" name="Edit Profile" action={()=> navigation.navigate('editProfile')} />
                <Option icon="map-outline" name="My locations" action={()=> {}} />
                <Option icon="ios-exit-outline" name="Logout" action={()=> {}} />
            </View>
        </View>
    )
}


const ProfileDetaills = ({navigation}: any)=>{
    return(
        <>
            <View 
                style={{alignItems: "center", padding: 30,}}
            >
                <Image
                    source={{uri: "https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg"}}
                    style={{height: 180, width: 180, borderRadius: 900}}
                />
                <View>
                    <Text
                        style={{color: "#f0f0f0", textAlign: "center", fontSize: 20, fontWeight: "700", padding: 10,}}
                    >
                        Jheremy CG
                    </Text>
                </View>
            </View>
            <View>
                <Settings/>
            </View>
        </>
    )
}

export default ProfileDetaills