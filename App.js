import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import Navigator from "./src/navigator";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PersistGate } from "redux-persist/integration/react";
import { LoadingScreen } from "./src/Screens/LoginScreen/LoadingScreen";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={LoadingScreen}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <StatusBar />
                        <Navigator />
                    </SafeAreaView>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
