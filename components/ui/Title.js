import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

function Title(props) {
    const { children } = props
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12
    }
})