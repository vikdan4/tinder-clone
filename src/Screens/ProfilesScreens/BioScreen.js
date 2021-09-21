import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { profilesActions } from "../../store/actions/actionCreators";

class BioScreen extends React.Component {
    user = this.props.route.params.user;
    showReactionButtons = this.props.route.params.showReactionButtons;
    render() {
        return (
            <>
                <ScrollView
                    style={{ backgroundColor: "#fff" }}
                    contentContainerStyle={{
                        flexGrow: 1,
                        backgroundColor: "#fff",
                    }}
                >
                    <Image
                        source={{
                            uri: this.user.imgUrl,
                        }}
                        resizeMode="cover"
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.textInfo}>
                            {this.user.name}, {this.user.age}
                        </Text>
                        <View
                            style={{
                                flex: 1,
                                alignItems: "flex-end",
                                paddingRight: 10,
                            }}
                        >
                            <Ionicons
                                name="arrow-back-circle"
                                size={56}
                                color="#c9c"
                                onPress={() => this.props.navigation.pop()}
                            />
                        </View>
                    </View>
                    <Text style={styles.textBio}>{this.user.bio}</Text>
                    <View style={{ height: 150 }} />
                </ScrollView>
                {this.showReactionButtons ? (
                    <LinearGradient
                        style={styles.buttons}
                        colors={[
                            "rgba(255,255,255,0)",
                            "rgba(255,255,255,0.8)",
                            "rgba(255,255,255,1)",
                            "rgba(255,255,255,1)",
                            "rgba(255,255,255,1)",
                        ]}
                    >
                        <Ionicons
                            name="close-circle"
                            size={60}
                            color="#f03"
                            onPress={() => {
                                this.props.setReaction(false);
                                this.props.navigation.pop();
                            }}
                        />
                        <Ionicons
                            name="heart-circle"
                            size={60}
                            color="#0f6"
                            onPress={() => {
                                this.props.setReaction(true);
                                this.props.navigation.pop();
                            }}
                        />
                    </LinearGradient>
                ) : (
                    <LinearGradient
                        style={styles.buttons}
                        colors={[
                            "rgba(255,255,255,0)",
                            "rgba(255,255,255,0.5)",
                            "rgba(255,255,255,0.9)",
                            "rgba(255,255,255,1)",
                        ]}
                    >
                        <View style={{ height: 50 }} />
                    </LinearGradient>
                )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    buttons: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingBottom: 5,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
    },
    info: {
        flexDirection: "row",
        //backgroundColor: "#ccc",
        //alignItems: "center",
        justifyContent: "flex-end",
    },
    image: {
        resizeMode: "cover",
        width: "100%",
        height: Dimensions.get("window").height * 0.7,
    },
    textInfo: {
        marginVertical: 20,
        marginLeft: 20,
        fontSize: 36,
        fontWeight: "bold",
    },
    textBio: {
        marginLeft: 20,
        fontSize: 24,
    },
});

const mapDispatch = {
    setReaction: profilesActions.setReaction,
};

export default connect(null, mapDispatch)(BioScreen);
