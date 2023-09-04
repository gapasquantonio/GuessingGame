import { View, StyleSheet, Text } from "react-native"
import Colors from "../../constants/Colors"

function GuessLogItem(props) {
    const { roundNumber, guess } = props
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderColor: Colors.primary800,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRaduys: 3
    },

})