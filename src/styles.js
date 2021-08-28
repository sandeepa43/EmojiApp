import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        position: "absolute",
        left: 50,
        top: 300,
    },
    likeContainer: {
        position: "absolute",
        left: -10,
        top: -30,
        padding: 5,
        flex: 1,
        backgroundColor: "#FFF",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 20,
    },
    imgContainer: {
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    emojiText: {
        paddingTop: "2%",
        textAlign: "center"
    },
    img: {
        height: 20,
        width: 20
    },
    emojiImg: {
        height: 30,
        width: 30,
    }

});
