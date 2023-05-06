import { Layout, Spinner, Button } from "@ui-kitten/components";
import { useState } from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import global from "../global";


export default function TransactionSuccess({ transactionStatus, onPressDone }) {
    
    // const [isLoading, setIsLoading] = useState(false);

    return(
        <Layout style={{height: 650}}>
            {transactionStatus == 'YES' ? Processing() 
            : transactionStatus == 'SUCCESS' ? Success() : Failure()}

        </Layout>
    )

  function Processing() {
    return <Layout style={styles.loading}>
      <Text style={styles.text}>Please Wait!</Text>
      <Spinner size="giant" />
    </Layout>;
  }

  function Success() {
    return <Layout>
      <Text style={styles.text}>
        Transaction successful!
      </Text>
      <Layout style={styles.tick}>
        <Image
          style={styles.tick}
          source={{
            uri: 'https://img.freepik.com/premium-vector/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.jpg?w=360',
          }} />
      </Layout>
      <Button
            style={global.button}
            appearance='outline'
            onPress={onPressDone}
        ><Text>Done</Text></Button>
    </Layout>;
  }

  function Failure() {
    return (
      <Layout>
        <Text style={styles.text}>
          Transaction Failure!
        </Text>
        <Layout style={styles.tick}>
          <Image
            style={styles.tick}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/004/988/429/original/red-wrong-mark-icon-free-free-vector.jpg',
            }} />
        </Layout>
        <Button
            style={global.button}
            appearance='outline'
            onPress={onPressDone}
        ><Text>Done</Text></Button>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tick: {
        alignItems:'center',
        justifyContent:'center',
        width: 250,
        height: 250,
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