import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomInputField from '../../components/CustomInputField';
import CustomButton from '../../components/CustomButton';
import { FontSize, MetricSizes } from '../../constants/Sizes.ts';
import { AppColors } from '../../constants/Colors.ts';
import { useNavigation } from '@react-navigation/native';
import { SIGNUP_SCREEN } from '../../constants/Screens.ts';
import { AuthStackParamList } from '../../constants/StackParams.ts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginFormData } from '../../constants/TypesAndInterfaces.ts';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice.ts';

type RootNavProp = NativeStackNavigationProp<AuthStackParamList>;

const schema = yup.object({
    email: yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const Login = () => {
    const navigation = useNavigation<RootNavProp>()
    const dispatch = useDispatch()
    const { control, handleSubmit } = useForm<LoginFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: LoginFormData) => {
        console.log('Login Data:', data);
        if (data?.email?.toLowerCase() === "tester@spotter.ai" && data?.password?.toLowerCase() === "test111") {
            dispatch(login({
                user:data,
                isLoggedIn: true
            }));
        }
    };

    const navigateToSignup = () => {
        navigation.navigate(SIGNUP_SCREEN);
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.logo}>spotter</Text>

                <CustomInputField
                    control={control}
                    name="email"
                    placeholder="login"
                />

                <CustomInputField
                    control={control}
                    name="password"
                    placeholder="password"
                    secureTextEntry
                />

                <View style={styles.buttonsContainer}>
                    <CustomButton
                        text={'login'}
                        variant={'primary'}
                        onPress={handleSubmit(onSubmit)}
                    />
                    <CustomButton
                        text={'forgot password'}
                        variant={'secondary'}
                        containerStyle={{
                            marginTop: MetricSizes.medium,
                        }}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.signupContainer} onPress={navigateToSignup}>
                <Text style={styles.signupText}>
                    Don’t have an account yet?{' '}
                    <Text style={styles.signupLink}>Sign up!</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: MetricSizes.large,
        backgroundColor: AppColors.white,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 36,
        fontWeight: '600',
        color: AppColors.primary,
        marginBottom: 50,
        fontFamily: 'Avenir',
    },
    buttonsContainer: {
        width: '100%',
        marginTop: 30,
    },
    signupContainer: {
        paddingVertical: MetricSizes.large,
        alignItems: 'center',
    },
    signupText: {
        fontSize: FontSize.regular,
        color: AppColors.secondary,
        textAlign: 'center',
    },
    signupLink: {
        color: AppColors.secondary,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
});
