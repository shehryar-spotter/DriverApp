import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppColors } from '../../constants/Colors.ts';
import { Images } from '../../assets/Images';
import { FontSize } from '../../constants/Sizes.ts';

const SplashScreen = () => (
    <View style={styles.container}>
        <Image source={Images.IC_SPOTTER} style={styles.logo} />
        <Image source={Images.IC_LOGO_WITH_TEXT} style={styles.logo} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.primary,
    },
    logo: { width: 100, height: 100, resizeMode: 'contain' },
    text: { marginTop: 20, fontSize: FontSize.xxl, color: AppColors.white, fontWeight: '600' },
});

export default SplashScreen;
