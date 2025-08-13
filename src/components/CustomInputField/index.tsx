import React from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    KeyboardType,
} from 'react-native';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { AppColors } from '../../constants/Colors.ts';
import { FontSize, MetricSizes } from '../../constants/Sizes.ts';

interface CustomInputFieldProps {
    control: Control<any>;
    name: string;
    placeholder?: string;
    rules?: RegisterOptions;
    secureTextEntry?: boolean;
    style?: ViewStyle;
    inputStyle?: TextStyle;
    errorStyle?: TextStyle;
    keyboardType?: KeyboardType;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
    control,
    name,
    placeholder,
    rules = {},
    secureTextEntry = false,
    style = {},
    inputStyle = {},
    errorStyle = {},
    keyboardType,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
            }) => (
                <>
                    <View style={[styles.inputContainer, style]}>
                        <TextInput
                            placeholder={placeholder}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={[styles.input, inputStyle]}
                            secureTextEntry={secureTextEntry}
                            placeholderTextColor="#999"
                            keyboardType={keyboardType || 'default'}
                        />
                        {error && (
                            <Text style={[styles.error, errorStyle]}>
                                {error.message || 'Invalid field'}
                            </Text>
                        )}
                    </View>
                </>
            )}
        />
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginBottom: MetricSizes.medium,
    },
    input: {
        width: '100%',
        backgroundColor: AppColors.white,
        borderRadius: MetricSizes.tiny,
        paddingHorizontal: MetricSizes.medium,
        paddingVertical: MetricSizes.regular,
        fontSize: FontSize.regular,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 1,
    },
    error: {
        color: 'red',
        fontSize: MetricSizes.medium,
        marginTop: MetricSizes.small,
        alignSelf: 'flex-start',
    },
});

export default CustomInputField;
