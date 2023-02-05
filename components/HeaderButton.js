import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../constants'

const HeaderButton = ({ icon , title }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.warn("claim")}
        >
            <View
                style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", }}
            >
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
                <Text style={{ color: COLORS.white, ...FONTS.body3, marginLeft: SIZES.base }}>{title}</Text>
            </View>

        </TouchableOpacity>
    );
};

export default HeaderButton;
