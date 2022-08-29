import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import  {Ionicons} from '@expo/vector-icons';

import { colors } from '../config/constants';

const Cell = ({title, icon, tintColor, onPress,style}) => {
  return (
    <TouchableOpacity 
            onPress={onPress}
            style={[styles.cell, style]}
        >
            <View style={[styles.iconCont, {backgroundColor:tintColor
            }]} >
                <Ionicons
                    name={icon}
                    size={24}
                    color={"white"} 
                />
             </View>
            <Text style={styles.text}>{title}</Text>
            <Ionicons name="chevron-forward-outline" size={20}/>
        </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    cell:{
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor:'white',
        flexDirection:'row', //cell ile yazıyı yanyana göstermesi için default column
        alignItems:'center',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:colors.seperator,
    },
    iconCont:{
       width:32,
       height:32,
       borderRadius:6,
       justifyContent:'center',
       alignItems:'center',
    },
    text:{
        fontSize:16,
        marginStart:16,
        flex:1
    },
})
export default Cell