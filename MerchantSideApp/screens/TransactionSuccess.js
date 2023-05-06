import { Layout, Spinner } from "@ui-kitten/components";
import { useState } from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";


export default function TransactionSuccess() {
    
    const [isLoading, setIsLoading] = useState(false);

    return(
        <Layout style={{height: 650}}>
            {isLoading? (
                <Layout style={styles.loading}>
                    <Text style={styles.text}>Please Wait!</Text>
                <Spinner size="giant"/>
              </Layout>
            ) 
            : (
                <Layout >
          <Text style={styles.text}>
            Transaction successful!
          </Text>
          <Layout style={styles.tick}>
          <Image
        style={styles.tick}
        source={{
          uri: 'https://img.freepik.com/premium-vector/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.jpg?w=360',
        }}
      />
          </Layout>
        </Layout>
            )}

        </Layout>
    )
}

const styles = StyleSheet.create({
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tick: {
        marginTop: 50,
        width: 250,
        height: 250,
        marginLeft: 30,
    },
    text: {
        color: "white",
        fontSize: 40, 
        fontWeight: 600,
        marginTop: 30,
        justifyContent: "center",
        marginLeft: 50
    }
  });