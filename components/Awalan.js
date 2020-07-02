import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'native-base';


export default class Awalan extends Component{
  
  render(){
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../src/BG.png')} style={styles.backgroundimage}>
    <Image source={require('../src/humaaans.png')} style={{
    height: 600,
    width: 450,
    position: 'relative',
    top: 280,
    }}/>
    <View style={{flex:1}}>
    <Image source={require('../src/logoo.png')} style={{
    height: 100,
    width: 250,
    position: 'relative',
    bottom: 400,
    left: 45,
    }}/>
    <Image source={require('../src/LPP.png')} style={{
      resizeMode: 'contain', 
      width: 80, 
      height: 80, 
      position: 'relative',
      alignSelf: 'center',
      bottom: 600,
      }}></Image>
      <SafeAreaView style={{
            width : 250,
            height : 80,
      }}>
        <Text style={styles.teksbawah}>Adalah aplikasi untuk memudahkan kamu dalam memilih tanaman apa yang cocok</Text>
      </SafeAreaView>
    </View>
    <View style={styles.buton}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{
            paddingVertical: 11,
            fontSize: 25,
            color: "#1BBC9B",
            alignSelf: 'center'
          }}>Mulai  <Icon type="FontAwesome" name='arrow-right' style={{color: '#1BBC9B'}}/></Text>
          </TouchableOpacity></View>
    </ImageBackground>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2FFF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teksbawah:{
    fontSize: 25,
    color: 'black',
    position: 'relative',
    bottom: 520,
    left: 80,
    fontFamily: 'sans-serif-thin'
  },
  buton:{
    width: 200,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    position: 'relative',
    bottom: 80,
  },
  backgroundimage: {
    flex: 1,
    width:450,
  }
});