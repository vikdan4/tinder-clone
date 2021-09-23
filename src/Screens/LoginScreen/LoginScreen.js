import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import {
    actionCreators,
    authActions,
} from "../../store/actions/actionCreators";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 64,
                        fontWeight: "bold",
                        color: "#303",
                        textAlign: "center",
                        fontStyle: "italic",
                    }}
                >
                    {"Tinder-\t\t\n\t\t\tclone"}
                </Text>

                <View style={styles.login}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="login, email, phone number"
                    />
                    <TextInput style={styles.inputs} placeholder="password" />

                    <TouchableOpacity
                        onPress={() =>
                            this.props.getToken({
                                login: "vikdan",
                                password: "vikdan123",
                            })
                        }
                        style={styles.touchableArea}
                    >
                        <View style={styles.button}>
                            <Text
                                style={{
                                    fontSize: 36,
                                    fontWeight: "bold",
                                    fontStyle: "italic",
                                    color: "#303",
                                }}
                            >
                                {"Login"}
                            </Text>
                            <Ionicons name="log-in" size={48} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c9c",
        //alignItems: "center",
        justifyContent: "center",
    },
    login: {
        width: "80%",
        //width: Dimensions.get("window").width * 0.8,
        marginTop: 40,
        marginHorizontal: "10%",
        //backgroundColor: "gray",
    },
    inputs: {
        height: 40,
        paddingLeft: 10,
        fontSize: 32,
        margin: "1%",
        backgroundColor: "white",
        borderRadius: 5,
    },
    touchableArea: {
        //backgroundColor: "yellow",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: "3%",
    },
    button: {
        paddingLeft: 10,
        paddingRight: 5,
        borderColor: "#303",
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
    },
});

const mapDispatch = {
    getToken: authActions.getToken,
};

export default connect(null, mapDispatch)(LoginScreen);
