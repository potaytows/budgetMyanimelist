import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput } from 'react-native'




const Searchbox = () => {
  const [searchqry, onChangeqry] = React.useState('');
  const { container } = styles;

  return (
    <SafeAreaView style={container}> 
      <TextInput 
        onChangeText={onChangeqry}
        value={searchqry}
        placeholder="Search for animes"
      />
    </SafeAreaView>
    
     

  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft:15,
    marginRight:15  
  },
})


export default Searchbox
