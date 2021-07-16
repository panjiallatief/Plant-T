import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight, Image, useWindowDimensions, Dimensions} from 'react-native';
import { Icon } from 'native-base';

export default class Pilihsurvei extends Component {

  render() {
  return (
    <View style={styles.container}>
        <View style={{
            width : '80%',
            height: '70%',
            backgroundColor : '#E2FFF9',
            borderRadius: 30,
            justifyContent: 'center',
        }}>
            <Text style={styles.text_header}>Pilih survei</Text>
            <View style={{
                width: '60%',
                height: '10%',
                backgroundColor: 'white',
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                marginVertical: 20,
            }}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('Pilih',{id:1})}>
              <SafeAreaView style={{
              borderRadius: 30,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}><Text style={{fontSize: 30, fontWeight: 'bold', color: '#1BBC9B'}}>Otomatis <Icon type="FontAwesome" name='arrow-right' style={{
              color: '#1BBC9B',
              position: 'relative',
              }}/></Text>
            </SafeAreaView>
              </TouchableOpacity>
                  </View>

                  <View style={{
                width: '60%',
                height: '10%',
                backgroundColor: 'white',
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 30,
            }}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('SPK',{id:1})}>
              <SafeAreaView style={{
              borderRadius: 30,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}><Text style={{fontSize: 30, fontWeight: 'bold', color: '#1BBC9B'}}>Manual <Icon type="FontAwesome" name='arrow-right' style={{
              color: '#1BBC9B',
              position: 'relative',
              }}/></Text>
            </SafeAreaView>
              </TouchableOpacity>
                  </View>

                  

        </View>
       

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1BBC9B',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  text_header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#1BBC9B',
    bottom: '10%',
    justifyContent:'flex-start',
    position: 'relative',
    paddingHorizontal: '5%',
    alignSelf: 'center'
  },

  
});
