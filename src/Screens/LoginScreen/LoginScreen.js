import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import {
    actionCreators,
    authActions,
} from "../../store/actions/actionCreators";
import Ionicons from "@expo/vector-icons/Ionicons";

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 64,
                        fontWeight: "bold",
                        color: "#303",
                        fontStyle: "italic",
                    }}
                >
                    {"Tinder-\t\t\n\t\t\t\tclone"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 30,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 36,
                            fontWeight: "bold",
                            color: "#303",
                        }}
                    >
                        {"Login"}
                    </Text>
                    <Ionicons
                        name="log-in"
                        size={64}
                        color="white"
                        onPress={() => this.props.setLoggedStatus(true)}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c9c",
        alignItems: "center",
        justifyContent: "center",
    },
});

const mapDispatch = {
    setLoggedStatus: authActions.setLoggedStatus,
};

export default connect(null, mapDispatch)(LoginScreen);
