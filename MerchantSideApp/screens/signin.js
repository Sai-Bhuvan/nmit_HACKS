import { Text, TextInput, View, StyleSheet } from "react-native";
export default function SignIn({mobno}) {
    return (
       <View>
        <Text style={styles.text1}>Enter your XXXX Pin</Text>
        <Text style={styles.text2}>{mobno}</Text>
        <TextInput 
        maxLength={4}
        style={styles.input} 
        keyboardType="numeric"
        secureTextEntry={true}>

        </TextInput>
       </View>

    )
}

const styles = StyleSheet.create({
    text1: {
        marginTop: 100,
        fontSize: 25,
        fontWeight: 400,
    },
    text2: {
        color: "gray",
        marginLeft: 50,
        fontSize: 20,
        marginTop: 5,
    },
    input: {
        marginTop: 200,
        borderBottomWidth: 2,
        borderColor: "#19A7CE",
        fontSize: 30,
        width: 200,
        textAlign: "center",
        marginLeft: 30
        
    },
})