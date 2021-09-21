import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { profilesActions } from "../../store/actions/actionCreators";
import { connect } from "react-redux";
import { profilesSelectors } from "../../store/selectors/profilesSelector";

class ProfilesScreen extends React.Component {
    componentDidMount() {
        this.props.getProfiles();
    }

    render() {
        const user = this.props.profiles?.[0];

        if (!user) {
            return (
                <View style={styles.noProfiles}>
                    <Text
                        style={{ ...styles.textNoProfiles, textAlign: "left" }}
                    >
                        {"You've seen"}
                    </Text>
                    <Text
                        style={{ ...styles.textNoProfiles, textAlign: "right" }}
                    >
                        {"all profiles!"}
                    </Text>
                </View>
            );
        }

        return (
            <>
                <ImageBackground
                    source={{
                        uri: user.imgUrl,
                    }}
                    imageStyle={{ borderRadius: 10 }}
                    resizeMode="cover"
                    style={styles.imageBackground}
                >
                    <View style={styles.container}>
                        <LinearGradient
                            style={{ borderRadius: 10 }}
                            colors={[
                                "rgba(0,0,0,0)",
                                "rgba(0,0,0,0.8)",
                                "rgba(0,0,0,1)",
                            ]}
                        >
                            <View style={styles.info}>
                                <Text style={styles.textInfo}>
                                    {user.name}, {user.age}
                                </Text>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: "flex-end",
                                        paddingRight: 10,
                                    }}
                                >
                                    <Ionicons
                                        name="information-circle"
                                        size={36}
                                        color="white"
                                        onPress={() =>
                                            this.props.navigation.navigate(
                                                "Bio",
                                                {
                                                    user,
                                                    showReactionButtons: true,
                                                }
                                            )
                                        }
                                    />
                                </View>
                            </View>

                            <View style={styles.buttons}>
                                <Ionicons
                                    name="close-circle-outline"
                                    size={60}
                                    color="#f03"
                                    onPress={() =>
                                        this.props.setReaction(false)
                                    }
                                />
                                <Ionicons
                                    name="heart-circle-outline"
                                    size={60}
                                    color="#0f9"
                                    onPress={() => this.props.setReaction(true)}
                                />
                            </View>
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderBottomRightRadius: 10,
        borderBottomStartRadius: 10,
    },
    imageBackground: {
        flex: 1,
        justifyContent: "flex-end",
        marginHorizontal: 5,
        borderRadius: 10,
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    textInfo: {
        color: "white",
        marginLeft: 20,
        fontSize: 36,
        fontWeight: "bold",
    },
    noProfiles: {
        flex: 1,
        padding: 25,
        justifyContent: "center",
        backgroundColor: "#c9c",
    },
    textNoProfiles: {
        color: "#303",
        fontSize: 48,
        fontWeight: "bold",
    },
});

const mapDispatch = {
    getProfiles: profilesActions.getProfiles,
    setReaction: profilesActions.setReaction,
};

export default connect(
    (store) => ({
        profiles: profilesSelectors.profiles(store),
    }),
    mapDispatch
)(ProfilesScreen);
