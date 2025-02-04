import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useFormik } from "formik";

import TextInput from "../components/TextInput";
import Button from "../components/Button";
import validator from "../utils/validator";
interface LoginProps {}

const AdminLoginScreen: React.FC<LoginProps> = ({}) => {
    const navigation = useNavigation();

    const { errors, handleSubmit, handleChange, touched, handleBlur } = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit(value, { resetForm }) {
            navigation.navigate("Root")
            resetForm({ values: { email: "", password: "" } });
        },
        validate({ email, password }) {
            const errors = validator({ email, password });
            return errors;
        },
    });

    return (
        <View style={styles.view}>
            <Text style={{ color: "#223e4b", fontSize: 20, marginBottom: 16 }}>
                Admin Login
            </Text>
            <View style={styles.innerView}>
                <TextInput
                    icon='mail'
                    placeholder='email giriniz'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    keyboardType='email-address'
                    keyboardAppearance='dark'
                    error={errors.email}
                    touched={touched.email}
                    onChangeText={handleChange("email")}
                />
            </View>
            <View style={styles.innerView}>
                <TextInput
                    icon='key'
                    placeholder='şifrenizi giriniz'
                    secureTextEntry
                    autoCompleteType='password'
                    autoCapitalize='none'
                    keyboardAppearance='dark'
                    error={errors.password}
                    touched={touched.password}
                    onChangeText={handleChange("password")}
                />
            </View>
            <View style={{ display: "flex" }}>
                <Button label='Oturum Ac' onPress={handleSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    innerView: {
        paddingHorizontal: 32,
        marginBottom: 16,
        width: "100%",
    },
});

export default AdminLoginScreen;
