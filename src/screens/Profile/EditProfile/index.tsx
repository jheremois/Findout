import { FlatInput } from "@src/components/FlatInput";
import GoBack from "@src/components/GoBack";
import { checkImage } from "@src/helpers/consts";
import { profileType } from "@src/shared/interfaces/profileType";
import { AppStyles } from "@src/shared/styles/AppStyles";
import React, {useState, useEffect} from "react";
import { View, Text, Image, Pressable, Dimensions } from "react-native";

const EditProfile = ({navigation}: any)=>{

    const [profile, setProfile] = useState<profileType>({
        userName: "user name",
        userDescription: "description",
        userPicture: "https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg"
    })

    const changeForm = (e: string, field: any) => {
        setProfile({ ...profile, [field]: e })
    };

    return(
        <>
            <GoBack title="Edit profile" action={()=> navigation.goBack()}/>
            <View
                style={[AppStyles.bgBlue, {height: Dimensions.get("screen").height,}]}
            >
                <View style={[AppStyles.paddingXl, AppStyles.bgDarkGray, AppStyles.flex]}>
                    <View style={[AppStyles.alignCenter, AppStyles.paddingMBot]}>
                        <Pressable 
                        onPress={()=>{
                            //upImage()
                        }}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? `#ffffff05`
                                    : "transparent"
                            },
                            AppStyles.alignCenter,
                            AppStyles.marginMY
                        ]}
                        >
                            <Image 
                                source={{uri: profile?.userPicture}}
                                resizeMode="cover"
                                style={[AppStyles.rounded, {marginRight: 10, width: Dimensions.get("screen").width / 3.4, height: Dimensions.get("screen").width / 3.4}]}
                            />
                            <View style={[AppStyles.marginMTop]}>
                                <Text style={[AppStyles.textM, AppStyles.textWhite]}>
                                    Change Profile picture
                                </Text>
                            </View>
                        </Pressable>
                        <View>
                            <FlatInput
                                maxLength={20}
                                value={profile?.userName}
                                validator={profile?.userName.length < 3}
                                errMsg={"Invalid user name"}
                                onchangetext={(e: any) => changeForm(e, "userName")}
                                label="User name"
                                placeHolder="User name"
                                textarea={false}
                            />
                            <FlatInput
                                maxLength={900}
                                value={profile.userDescription}
                                validator={profile?.userDescription.length < 3}
                                errMsg={"Invalid user description"}
                                onchangetext={(e: any) => changeForm(e, "userDescription")}
                                label="Description"
                                placeHolder="Description"
                                textarea={true}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    )

}

export  default EditProfile