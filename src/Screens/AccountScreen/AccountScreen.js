import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { authActions } from "../../store/actions/actionCreators";

class AccountScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>redact Account</Text>
                <View style={{ backgroundColor: "#f6c", borderRadius: 10 }}>
                    <Button
                        title="Here you can LOG OUT!"
                        color="white"
                        onPress={() => this.props.clearToken()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

const mapDispatch = {
    clearToken: authActions.clearToken,
};

export default connect(null, mapDispatch)(AccountScreen);
