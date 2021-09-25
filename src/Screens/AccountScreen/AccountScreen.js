import React from "react";
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { authActions, userActions } from "../../store/actions/actionCreators";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { userSelector } from "../../store/selectors/userSelector";

class AccountScreen extends React.Component {
    myId = 77;

    constructor(props) {
        super(props);
        this.unsub = this.props.navigation.addListener("focus", () => {
            this.props.getUser(this.myId);
        });
    }

    componentWillUnmount() {
        this.unsub();
    }

    render() {
        const user = {
            id: 77,
            imgUrl: "http://mail.manyaninda.com/images/basinda-biz/1576065218_TGX_2.JPG",
            name: "Vikdan",
            age: "20",
            bio: "listening to music, reading, movies, athlete, spirituality",
        };
        return (
            <>
                <ScrollView
                    style={{ backgroundColor: "#fff" }}
                    contentContainerStyle={{
                        flexGrow: 1,
                        backgroundColor: "#c9c",
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            source={{
                                uri: user.imgUrl,
                            }}
                            resizeMode="cover"
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={(text) =>
                            this.setState({ password: text })
                        }
                        style={styles.inputs}
                        placeholder={user.name}
                    />
                    <TextInput
                        onChangeText={(text) =>
                            this.setState({ password: text })
                        }
                        style={styles.inputs}
                        placeholder={user.age}
                    />
                    <TextInput
                        onChangeText={(text) =>
                            this.setState({ password: text })
                        }
                        style={styles.inputs}
                        placeholder={user.bio}
                    />
                    <TouchableOpacity style={styles.touchableSubmit}>
                        <View style={styles.buttonSubmit}>
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: "#303",
                                }}
                            >
                                {"Submit changes"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.clearToken()}
                        style={styles.touchableLogout}
                    >
                        <View style={styles.buttonLogout}>
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    fontStyle: "italic",
                                    color: "#303",
                                }}
                            >
                                {"Log Out"}
                            </Text>
                            <Ionicons name="log-out" size={36} color="#303" />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </>
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
    image: {
        resizeMode: "cover",
        width: "100%",
        height: Dimensions.get("window").height * 0.6,
        marginBottom: "1%",
    },
    touchableLogout: {
        backgroundColor: "yellow",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: 100,
        marginBottom: 5,
    },
    buttonLogout: {
        paddingLeft: 10,
        paddingRight: 5,
        borderColor: "#303",
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
    },
    inputs: {
        height: 40,
        paddingLeft: 10,
        fontSize: 32,
        margin: "1%",
        backgroundColor: "white",
        borderRadius: 5,
    },
    touchableSubmit: {
        backgroundColor: "yellow",
        alignItems: "flex-start",
        marginTop: "3%",
    },
    buttonSubmit: {
        marginLeft: 10,
        paddingLeft: 10,
        paddingRight: 5,
        borderColor: "#303",
        borderWidth: 2,
        alignItems: "center",
        borderRadius: 10,
    },
});

const mapDispatch = {
    getUser: userActions.getUser,
    clearToken: authActions.clearToken,
};
const mapState = (store) => ({
    user: userSelector.user(store),
});
export default connect(mapState, mapDispatch)(AccountScreen);
