import { Dimensions, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('screen')
export default function Four({navigation}) {
  return (
    <SafeAreaView style={styles.Main}>
    <Text style={styles.title}>four</Text>

</SafeAreaView>
)
}

const styles = StyleSheet.create({
Main:{
width,
flex:1,
alignItems: 'center',
justifyContent: 'center'
},
title  : {
fontSize: 24,
fontWeight : '600',
color: '#000'
},
button : {
marginTop: 20 ,
paddingVertical: 10,
paddingHorizontal : 15,
borderRadius: 8,
backgroundColor: '#000',
alignItems: 'center',
justifyContent: 'center'
},
buttonText: {
fontSize: 18,
fontWeight: '600'
}
})