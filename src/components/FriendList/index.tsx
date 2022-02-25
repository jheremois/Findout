import React, { useState } from 'react'
import { View, Dimensions, VirtualizedList, Image, Text, Pressable } from 'react-native';
import { checkImage, showToast } from '@src/helpers/consts';
import { AppStyles } from '@src/shared/styles/AppStyles';
import { AppColors } from '@src/shared/styles/AppDefaults';
import { useNavigation } from '@react-navigation/native';
//import { format } from 'timeago.js';

function FriendList({ data, header, fixed, refFunc, state, updateFeed }: any) {

   /*  interface item{
        item: postType
    } */
    const navigation = useNavigation()

    const RenderItem = ({item}: any) => {        
        return(
            <>
                <Pressable
                    onPress={()=> navigation.navigate("friendChat", {user: item.user.userName})}
                    style={[
                        AppStyles.flexRow,
                        {
                            padding: 15,
                            borderBottomWidth: 1,
                            borderColor: AppColors.white + 20,
                        }
                    ]}
                >
                    <View
                        style={[
                            AppStyles.flexRow,
                        ]}
                    >
                        <Image
                            source={
                                {uri: item.user.userPicture}
                            }
                            style={[
                                AppStyles.rounded,
                                {
                                    height: Dimensions.get("screen").width / 8.4,
                                    width: Dimensions.get("screen").width / 8.4
                                }
                            ]}
                        />
                        <View>
                            <Text
                                style={
                                    [
                                        AppStyles.fontM,
                                        AppStyles.textWhite,
                                        AppStyles.paddingMX,
                                        {
                                            fontSize: 16,
                                        }
                                    ]
                                }
                            >
                                {
                                    item.user.userName
                                }
                            </Text>
                            <Text
                                style={
                                    [
                                        {
                                            color: AppColors.white + 95
                                        },
                                        AppStyles.paddingMX
                                    ]
                                }
                            >
                                {
                                    item.messagges.lastMessagge
                                }
                            </Text>
                        </View>
                    </View>
                </Pressable>
            </>
        )
    }

    const onRefresh = ()=>{
        refFunc()
    }

    const getItem = (data: any[], index: number) => (
        data[index]
    )

    const getCount = (data: any[]) => data.length

    return (
        <>
            {
                <>
                    {
                            <VirtualizedList
                                initialNumToRender={6}
                                onRefresh={onRefresh}
                                refreshing={state}
                                data={data}
                                keyExtractor={item => " 1" + Math.random() + Date.now()}
                                renderItem={({ item }) => (
                                    <RenderItem
                                        item={item}
                                    />
                                )}
                                showsVerticalScrollIndicator={false}
                                stickyHeaderIndices={fixed ?? []}
                                ListHeaderComponent={header}
                                listKey={`D${Date.now()}`}
                                getItemCount={getCount}
                                getItem={getItem}
                            />
                    }
                </>
            }
        </>
    )


}

export default FriendList