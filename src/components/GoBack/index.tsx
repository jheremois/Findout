import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { AppStyles } from '@src/shared/styles/AppStyles';
import { AppColors } from '@src/shared/styles/AppDefaults';

interface props{
    title?: string
    action?: VoidFunction
}

function GoBack(props: props) {
    const {title, action} = props

    const navigate = useNavigation()

    return (
        <>
            <View style={[AppStyles.paddingSX, AppStyles.wFull, AppStyles.contentCenter, AppStyles.bgGray, {zIndex: 99}]}>
                <View style={[AppStyles.flexRow, AppStyles.alignCenter, AppStyles.contentBetween]}>
                    <Pressable
                        onPress={() => navigate.goBack()} 
                        style={[AppStyles.paddingM]}
                    >
                        <Ionicons name={action?"close":"arrow-back"} size={29} color={AppColors.white} />
                    </Pressable>
                    <Text style={[AppStyles.paddingMX, AppStyles.textM, AppStyles.textWhite, AppStyles.fontM]}>
                        {title}
                    </Text>
                    {
                        action &&
                            <Pressable
                                onPress={action} 
                                style={[AppStyles.paddingM]}
                            >
                                <Ionicons name="checkmark-sharp" size={26} color={AppColors.white} />
                            </Pressable>
                    }
                </View>
            </View>
        </>
    )

}

export default GoBack

{/* <View style={[AppStyles.paddingSX, AppStyles.wFull, AppStyles.contentCenter, AppStyles.bgGray, {zIndex: 99}]}>
    <View style={[AppStyles.flexRow, AppStyles.alignCenter, AppStyles.contentBetween]}>
        <Pressable
            onPress={() => navigate.goBack()} 
            style={[AppStyles.paddingM]}
        >
            <Ionicons name="arrow-back" size={26} color={AppColors.white} />
        </Pressable>
        <Text style={[AppStyles.paddingMX, AppStyles.textM, AppStyles.textWhite, AppStyles.fontM]}>
            FriendList
        </Text>
    </View>
</View> */}