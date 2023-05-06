import * as React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons'
import global from '../../../global';

export default function Button({title,onpress,icon,color}){
    return(
        <TouchableOpacity onPress={onpress} style={styles.button}>
            <Entypo name={icon} size={28} color={color?color:'#f1f1f1'} />
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    button:{
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:17,
        color:'345',
        marginLeft:10
    }
})