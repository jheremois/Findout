import FriendList from "@src/components/FriendList";
import GoBack from "@components/GoBack";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, TextInput, Dimensions } from "react-native";
import { AppStyles } from "@src/shared/styles/AppStyles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "@src/shared/styles/AppDefaults";
import Chat from "@src/components/Chat";

const FriendChat = ({route}: any)=>{

    const [isFetching, setIsFetching] = useState(false);
    const [chats, setChats] = useState<any[]>([])
    const [user, setUser] = useState("")
    const [messagge, setMessagge] = useState("")
    const onRefresh = async () => {
        await setIsFetching(true);
        setTimeout(() => {
            setIsFetching(false);
        }, 3000);
    };

    useEffect(()=>{
        setChats([
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
            {
                messagge: "mensaje"
            },
        ])
        route.params && setUser(route.params.user)
    }, [])

    const sendMessagge =()=>{
        console.log(messagge)
    }

    return(
        <>
            <GoBack title={user} />
            <View
                style={[
                    {flex: 1},
                ]}
            >
                <Chat
                    data={
                        chats
                    }
                    state={isFetching}
                    refFunc={onRefresh}
                />
            </View>
            <View
                style={[
                    AppStyles.contentEnd
                ]}
            >
                <View
                    style={[
                        AppStyles.flexRow,
                        AppStyles.alignCenter,
                        {
                            height: Dimensions.get("screen").height / 16
                        }
                    ]}
                >
                    <TextInput
                        maxLength={200}
                        placeholder={"placeHolder"}
                        placeholderTextColor={AppColors.whiteLow}
                        value={messagge}
                        multiline={
                            false
                        }
                        numberOfLines={
                            1
                        }
                        onChangeText={(e)=> setMessagge(e)}
                        keyboardType={"default"}
                        style={[
                            {
                                width: Dimensions.get("screen").width / 1.2,
                                borderWidth: 2
                            },
                            AppStyles.textM,
                            AppStyles.paddingS,
                            AppStyles.textWhite,
                            AppStyles.hFull
                        ]}
                    />
                    <Pressable
                        onPress={()=>{
                            sendMessagge()
                        }}
                        style={[
                            {borderWidth: 2},
                            AppStyles.flex,
                            AppStyles.alignCenter,
                            AppStyles.contentCenter,
                            AppStyles.hFull
                        ]}
                    >
                        <Ionicons name="send" color={AppColors.blue} size={20}/>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default FriendChat