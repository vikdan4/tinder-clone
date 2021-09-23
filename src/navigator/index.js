import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import TabNavigator from "./TabNavigator";
import { connect } from "react-redux";
import { authSelectors } from "../store/selectors/authSelector";
import BioScreen from "../Screens/ProfilesScreens/BioScreen";

const Stack = createStackNavigator();

class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {this.props.token ? (
                        <>
                            <Stack.Screen
                                name="Main"
                                component={TabNavigator}
                            />
                            <Stack.Screen
                                name="Bio"
                                component={BioScreen}
                                options={{
                                    ...TransitionPresets.ModalFadeTransition,
                                    gestureEnabled: false,
                                }}
                            />
                        </>
                    ) : (
                        <Stack.Screen name="Login" component={LoginScreen} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default connect((store) => ({
    token: authSelectors.token(store),
}))(Navigator);
