import { View, Text } from 'react-native';
import React from 'react';
import { COLORS } from '../constants'

const LineDivider = ({ color, padding }) => {
    return (
        <View
            style={{ width: 1, paddingVertical: padding, }}
        >
            <View
                style={{ flex: 1, borderColor: color, borderLeftWidth: 1 }}
            >
            </View>
        </View>
    );
};

export default LineDivider;
