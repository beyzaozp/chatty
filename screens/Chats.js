import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";

import ContactRow  from "../compoents/ContactRow";
import Seperator from "../compoents/Seperator"

const Chats= ({})=>{
    return(
        <SafeAreaView>
            <ContactRow 
                name="Selçuk Efe Civelek"
                subTitle="React Native Deneme"
                onPress={()=>{
                    alert('Hello, Selçuk')
                }}
            />
            <Seperator/>
            <ContactRow 
                name="Beyza Özpınar"
                subTitle="React Deneme"
                onPress={()=>{
                    alert('Hello, Beyza')
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})

export default Chats;