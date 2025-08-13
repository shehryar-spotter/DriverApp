import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import { AppColors } from '../../constants/Colors';
import { FontSize, MetricSizes } from '../../constants/Sizes.ts';

interface CustomButtonProps {
    onPress?: () => void;
    variant: 'primary' | 'secondary';
    text: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    onPress = () => {},
    variant,
    text,
    containerStyle,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                variant === 'primary'
                    ? styles.primaryButton
                    : styles.secondaryButton,
                containerStyle,
            ]}
        >
            <Text
                style={
                    variant === 'primary'
                        ? styles.primaryText
                        : styles.secondaryText
                }
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    secondaryButton: {
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: MetricSizes.tiny,
        paddingVertical: MetricSizes.medium,
        alignItems: 'center',
    },
    primaryButton: {
        width: '100%',
        backgroundColor: AppColors.primary,
        borderRadius: MetricSizes.tiny,
        paddingVertical: MetricSizes.medium,
        alignItems: 'center',
    },
    secondaryText: {
        color: AppColors.primary,
        fontSize: FontSize.regular,
    },
    primaryText: {
        color: AppColors.white,
        fontSize: FontSize.regular,
    },
});
