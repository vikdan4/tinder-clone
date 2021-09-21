import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { matchesActions } from "../../store/actions/actionCreators";
import { matchesSelector } from "../../store/selectors/matchesSelector";
import { connect } from "react-redux";
import { Match } from "../../components/matchComponent";
import { FlatList } from "react-native-gesture-handler";

class MatchesScreen extends React.Component {
    myId = 77;

    constructor(props) {
        super(props);
        //send my Id to find Matches for me
        //Id should be written automatically
        this.unsub = this.props.navigation.addListener("focus", () => {
            this.props.getMatches(this.myId);
        });
    }

    componentWillUnmount() {
        this.unsub();
    }

    render() {
        const matches = this.props?.matches;

        if (matches.length == 0) {
            return (
                <View style={styles.noMatches}>
                    <Text
                        style={{ ...styles.textNoMatches, textAlign: "left" }}
                    >
                        {"Ops, you have"}
                    </Text>
                    <Text
                        style={{ ...styles.textNoMatches, textAlign: "right" }}
                    >
                        {"no matches!"}
                    </Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Your matches</Text>
                </View>
                <FlatList
                    data={matches}
                    style={styles.scroll}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <Match user={item} navigation={this.props.navigation} />
                    )}
                    numColumns={2}
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
    header: {
        height: 50,
        borderRadius: 10,
        backgroundColor: "#c9c",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        margin: 5,
    },
    scroll: {
        flex: 1,
        width: "100%",
        alignContent: "space-around",
    },
    textHeader: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
    },
    noMatches: {
        flex: 1,
        padding: 25,
        justifyContent: "center",
        backgroundColor: "#c9c",
    },
    textNoMatches: {
        color: "#303",
        fontSize: 48,
        fontWeight: "bold",
    },
});

const mapStateToProps = (store) => ({
    matches: matchesSelector.matches(store),
});

const mapDispatch = {
    getMatches: matchesActions.getMatches,
};

export default connect(mapStateToProps, mapDispatch)(MatchesScreen);
