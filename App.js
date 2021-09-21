import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Navigator from "./src/navigator";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar />
                    <Navigator />
                </SafeAreaView>
            </Provider>
        );
    }
}

export default App;
