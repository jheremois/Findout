import React, { useState } from 'react'
import { View, Dimensions, VirtualizedList, Image, Text, Pressable } from 'react-native';
import { checkImage, showToast } from '@src/helpers/consts';
import { AppStyles } from '@src/shared/styles/AppStyles';
import { AppColors } from '@src/shared/styles/AppDefaults';
import { useNavigation } from '@react-navigation/native';
//import { format } from 'timeago.js';

function Chat({ data, header, fixed, refFunc, state, updateFeed }: any) {

    const RenderItem = ({item}: any) => {        
        return(
            <>
                <View
                    style={[
                        AppStyles.roundedM,
                        AppStyles.marginSY,
                        AppStyles.marginMX,
                        AppStyles.paddingM,
                        {
                            backgroundColor: AppColors.blue + 20,
                            borderWidth: 1,
                            borderColor: AppColors.white + 20,
                        }
                    ]}
                >
                    <Text
                        style={
                            [
                                {
                                    color: AppColors.white,
                                },
                                AppStyles.textXS,
                                AppStyles.paddingMX
                            ]
                        }
                    >
                        {
                            item.messagge
                        }
                    </Text>
                </View>
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
                                inverted
                                initialNumToRender={6}
                                //onRefresh={onRefresh}
                                //refreshing={state}
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

export default Chat