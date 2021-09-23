import React from "react";
import { StyleSheet, Text, View } from "react-native";

export class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{"Loading..."}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#c9c",
    },
    text: {
        color: "#303",
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
    },
});
