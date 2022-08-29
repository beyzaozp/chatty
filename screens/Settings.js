import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ContactRow from '../compoents/ContactRow';
import Seperator from '../compoents/Seperator';
import { colors } from '../config/constants';

import Cell from '../compoents/Cell';
const Settings = () => {
  return (
    <SafeAreaView>
        <ContactRow 
            name="Beyza ÖZPINAR"
            subtitle="beyzaozpinar@betesey.com"
            style={styles.contactRow }
        />
        
        <Seperator/>
        
        <Cell
            title="Logout"
            icon="log-out-outline"    
            tintColor={colors.warnings}
            onPress={()=>{
                alert("Hayırdır? Çıkıcan mı?")
            }}
        />
        <Seperator/>
        
        <Cell
            title="Tell a friend"
            icon="information-outline"    
            tintColor={colors.blue}
            onPress={()=>{
                alert("What do you want to tell?")
            }}
            style={{marginTop:10}}
        />
        <Seperator/>
        
        <Cell
            title="Tell a friend"
            icon="heart-outline"    
            tintColor={colors.purple}
            onPress={()=>{
                alert("What do you want to tell?")
            }}
            style={{marginTop:10}}
        />
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
    contactRow:{
        backgroundColor:"white",
        marginTop:10,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:colors.seperator,
    },
    
    
})
export default Settings;