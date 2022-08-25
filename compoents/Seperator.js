import React from "react";
import { View, StyleSheet,} from "react-native";

const Seperator = () => {
    return(
        <View style={styles.seperator}/>
    )
}

const styles = StyleSheet.create({
    seperator:{
        height:StyleSheet.hairlineWidth,
        backgroundColor: '#E2E2E2',
        marginStart:88
    }
})
export default Seperator;