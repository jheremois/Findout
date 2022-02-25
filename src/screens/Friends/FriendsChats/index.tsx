import FriendList from "@src/components/FriendList";
import GoBack from "@components/GoBack";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { AppStyles } from "@src/shared/styles/AppStyles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "@src/shared/styles/AppDefaults";

const FriendsChats = ()=>{

    const [isFetching, setIsFetching] = useState(false);
    const [chats, setChats] = useState<any[]>([])

    const onRefresh = async () => {
        await setIsFetching(true);
        setTimeout(() => {
            setIsFetching(false);
        }, 3000);
    };
    
    const navigate = useNavigation()

    useEffect(()=>{
        setChats([
            {
                user: {
                    userName: "Jheremy",
                    userPicture: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2016/01/the-difference-placeholder.png"
                },
                messagges: {
                    lastMessagge: "Lorem ipsun messagge"
                }
            },
            {
                user: {
                    userName: "Jose",
                    userPicture: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2016/01/the-difference-placeholder.png"
                },
                messagges: {
                    lastMessagge: "Last messagge"
                }
            },
            {
                user: {
                    userName: "Jheremy",
                    userPicture: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2016/01/the-difference-placeholder.png"
                },
                messagges: {
                    lastMessagge: "Lorem ipsun messagge"
                }
            },
            {
                user: {
                    userName: "Jose",
                    userPicture: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2016/01/the-difference-placeholder.png"
                },
                messagges: {
                    lastMessagge: "Last messagge"
                }
            }
        ])
    }, []) 

    return(
        <>
            <GoBack title="Friends chats"/>
            <FriendList
                data={
                    chats
                }
                state={isFetching}
                refFunc={onRefresh}
            />
        </>
    )
}

export default FriendsChats