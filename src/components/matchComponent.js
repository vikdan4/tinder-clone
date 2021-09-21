import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions,
} from "react-native";

export class Match extends React.Component {
    render() {
        const user = this.props.user;
        return (
            <View>
                <ImageBackground
                    source={{
                        uri: user.imgUrl,
                    }}
                    imageStyle={{
                        borderRadius: 10,
                    }}
                    resizeMode="cover"
                    style={styles.imageBackground}
                >
                    <View style={{ flex: 1 }} />
                    <LinearGradient
                        style={{ borderRadius: 10 }}
                        colors={[
                            "rgba(0,0,0,0)",
                            "rgba(0,0,0,0.6)",
                            "rgba(0,0,0,0.9)",
                        ]}
                    >
                        <View style={styles.container}>
                            <View
                                style={{
                                    alignItems: "flex-end",
                                    paddingRight: 10,
                                    paddingBottom: 10,
                                }}
                            >
                                <Ionicons
                                    name="information-circle"
                                    size={36}
                                    color="white"
                                    onPress={() =>
                                        this.props.navigation.navigate("Bio", {
                                            user,
                                        })
                                    }
                                />
                            </View>
                            <View style={styles.boxInfo}>
                                <Text style={styles.textInfo}>
                                    {user.name}, {user.age}
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        justifyContent: "flex-end",
        borderRadius: 10,
        height: (((Dimensions.get("window").width * 0.96) / 2) * 16) / 11,
        width: (Dimensions.get("window").width * 0.95) / 2,
        marginLeft: (Dimensions.get("window").width * 0.05) / 3,
        marginBottom: (Dimensions.get("window").width * 0.05) / 3,
    },
    textInfo: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 5,
    },
    container: {
        flexDirection: "row-reverse",
    },
    boxInfo: {
        flex: 1,
        justifyContent: "center",
    },
});
