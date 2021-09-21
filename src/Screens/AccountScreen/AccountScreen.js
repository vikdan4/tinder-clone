import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { authActions } from "../../store/actions/actionCreators";

class AccountScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>redact Account</Text>
                <Button
                    style={{ backgroundColor: "#f6c" }}
                    title="Here you can LOG OUT!"
                    onPress={() => this.props.setLoggedStatus(false)}
                />
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
    setLoggedStatus: authActions.setLoggedStatus,
};

export default connect(null, mapDispatch)(AccountScreen);
