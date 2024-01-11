import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width,height}= Dimensions.get('screen')

export default function Mt2() {
  return (
    <View style = {styles.Main}>
      <Text style={styles.hello}>helloworld</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Main:{
        width,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen'
    },
    hello:{
        fontSize: 24,
        fontWeight : '600',
        color: '#000'
    },
})