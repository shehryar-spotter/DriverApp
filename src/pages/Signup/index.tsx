import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomInputField from '../../components/CustomInputField';
import CustomButton from '../../components/CustomButton';
import { FontSize, MetricSizes } from '../../constants/Sizes.ts';
import { AppColors } from '../../constants/Colors.ts';
import { SignUpFormData } from '../../constants/TypesAndInterfaces.ts';


const schema = (step: number) =>
    yup.object().shape({
        name: step === 0
            ? yup.string().required('Name is required')
            : yup.string(),
        phone: step === 0
            ? yup.string().required('Phone is required')
            : yup.string(),
        email: step === 0
            ? yup
                .string()
                .email('Invalid email format')
                .required('Email is required')
            : yup.string(),
        mcNumber: step === 1
            ? yup.string().required('MC / MX Number is required')
            : yup.string(),
        companyName: step === 1
            ? yup.string().required('Company Name is required')
            : yup.string(),
        streetAddress: step === 1
            ? yup.string().required('Street Address is required')
            : yup.string(),
        city: step === 1
            ? yup.string().required('City is required')
            : yup.string(),
        state: step === 1
            ? yup.string().required('State is required')
            : yup.string(),
        zipCode: step === 1
            ? yup.string().required('Zip code is required')
            : yup.string(),
        dotNumber: step === 1
            ? yup.string().required('DOT Number is required')
            : yup.string(),
    });

const Signup = () => {
    const navigation = useNavigation();
    const [step, setStep] = useState(0);

    const {
        control,
        handleSubmit,
        trigger,
        getValues,
    } = useForm<SignUpFormData>({
        resolver: yupResolver(schema(step)),
        mode: 'onTouched',
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            mcNumber: '',
            companyName: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            dotNumber: '',
        },
    });

    const onNext = async () => {
        const valid = await trigger();
        if (!valid) return;

        if (step < 1) {
            setStep(step + 1);
        } else {
            const data = getValues();
            console.log('Final submitted data:', data);
            setStep(2);
        }
    };

    const onBack = () => {
        if (step > 0) setStep(step - 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {step === 0 && (
                    <>
                        <Text style={styles.title}>Carrier Sign Up</Text>
                        <CustomInputField
                            control={control}
                            name="name"
                            placeholder="Name"
                        />
                        <CustomInputField
                            control={control}
                            name="phone"
                            placeholder="Phone Number"
                            keyboardType="phone-pad"
                        />
                        <CustomInputField
                            control={control}
                            name="email"
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                    </>
                )}

                {step === 1 && (
                    <>
                        <CustomInputField
                            control={control}
                            name="mcNumber"
                            placeholder="MC / MX Number"
                        />
                        <CustomInputField
                            control={control}
                            name="companyName"
                            placeholder="Company Name"
                        />
                        <CustomInputField
                            control={control}
                            name="streetAddress"
                            placeholder="Street Address"
                        />
                        <CustomInputField
                            control={control}
                            name="city"
                            placeholder="City"
                        />
                        <CustomInputField
                            control={control}
                            name="state"
                            placeholder="State"
                        />
                        <CustomInputField
                            control={control}
                            name="zipCode"
                            placeholder="Zip Code"
                            keyboardType="number-pad"
                        />
                        <CustomInputField
                            control={control}
                            name="dotNumber"
                            placeholder="DOT Number"
                        />
                    </>
                )}

                {step === 2 && (
                    <View style={styles.thanksContainer}>
                        <Text style={styles.thanksText}>
                            Thanks for signing up!
                        </Text>
                        <Text style={styles.thanksText}>
                            Please check your email to set your password
                        </Text>
                        <CustomButton
                            text="Back to Login"
                            containerStyle={{ marginTop: MetricSizes.medium }}
                            variant="secondary"
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                )}
            </View>

            {step < 2 && (
                <View>
                    <CustomButton
                        text={step === 1 ? 'Submit' : 'Next'}
                        variant="primary"
                        onPress={handleSubmit(onNext)}
                    />
                    {step > 0 && (
                        <CustomButton
                            containerStyle={{
                                marginTop: MetricSizes.regular,
                            }}
                            text="Back"
                            variant="secondary"
                            onPress={onBack}
                        />
                    )}
                </View>
            )}
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: MetricSizes.large,
        backgroundColor: AppColors.white,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: MetricSizes.medium,
        textAlign: 'center',
        fontWeight: '600',
        color: AppColors.primary,
    },
    thanksContainer: {
        alignItems: 'center',
    },
    thanksText: {
        fontSize: FontSize.regular,
        marginBottom: MetricSizes.medium,
        textAlign: 'center',
    },
});
