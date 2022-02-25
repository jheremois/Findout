import React from "react";
import { View, Text, Dimensions, TextInput, KeyboardTypeOptions } from "react-native";
import { AppStyles } from "@src/shared/styles/AppStyles";
import { AppColors } from "@src/shared/styles/AppDefaults";

interface props{
    value: string
    placeHolder?: string
    keyboard?: KeyboardTypeOptions
    validator?: boolean
    errMsg?: string
    label?: string
    onchangetext?: any
    textarea?: boolean
    maxLength?: number
}

export const FlatInput = (props: props)=>{
    const {placeHolder, value, onchangetext, keyboard, label, validator, errMsg, textarea, maxLength} = props
    return(
        <View style={[{marginTop: 20}]}>
            <Text
                style={
                    validator
                    ?
                        {
                            color: AppColors.red
                        }
                        :
                        {
                            color: AppColors.white
                        }
                }
            >
                {label}
            </Text>
            <TextInput
                maxLength={maxLength}
                placeholder={placeHolder}
                placeholderTextColor={AppColors.whiteLow}
                value={value}
                multiline={textarea
                    ?
                        true
                    :
                        false
                }
                numberOfLines={textarea
                    ?
                        2
                    :
                        1
                }
                onChangeText={onchangetext}
                keyboardType={keyboard}
                style={[
                    {
                        textAlignVertical: "top",
                        width: Dimensions.get("screen").width / 1.2,
                        borderBottomWidth: 2
                    },
                    AppStyles.textM,
                    AppStyles.paddingS,
                    AppStyles.textWhite,
                    validator
                        ?
                            {borderBottomColor: `${AppColors.red}95`}
                        :
                            {borderBottomColor: `${AppColors.white}95`}
                ]}
            />
            {
                validator
                ?
                    <Text style={[AppStyles.textRed, AppStyles.textXS]}>
                        {errMsg}
                    </Text>
                :
                    null
            }
        </View>
    )
}