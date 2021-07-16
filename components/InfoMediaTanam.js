import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight, Image, useWindowDimensions, Dimensions} from 'react-native';
import { Icon } from 'native-base';

export default class Info extends Component {
    constructor(props){
        super(props);
        this.state ={
          nama: '',
          gambar: '',
          latin:'',
        }
      }
      componentDidMount(){
        return fetch('https://spkbuah.patunganbersama.com/api/buahJenis?id='+this.props.navigation.state.params.id,{
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((response)=>response.json())
        .then((json)=> {
          this.setState({
            nama: json.nama,
            gambar: json.gambar,
            latin: json.latin,
          });
          console.log(json.nama)
        })
        .catch((error) => {
          console.error(error);
        });
      }
  render() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.namabuah}>{this.state.nama}</Text>
        <Text style={styles.namalatin}>{this.state.latin}</Text>

        <View style={styles.gambarbuah}><Image source={{uri:'https://spkbuah.patunganbersama.com/img/'+this.state.gambar}} style={styles.buatBuah}/></View>
        </View>
        
        <View style={{
            backgroundColor: 'white',
            width: '90%',
            height: '20%',
            alignSelf: 'center',
            position: 'absolute',
            borderRadius: 30,
            top: '35%'
        }}><TouchableOpacity>
            <View style={{
            width: '100%',
            height : '100%',
            backgroundColor: '#E2FFF9',
            borderRadius: 30,
        }}></View>
        </TouchableOpacity>
        </View>

        <View style={{
            flexDirection: 'row',
            //backgroundColor: 'green',
            width: '90%',
            height: '40%',
            bottom: '1%',
            position: 'absolute',
            justifyContent: 'space-evenly'

        }}>
        <View style={{
            backgroundColor: 'yellow',
            width: '40%',
            height: '40%',
            borderRadius: 30,
        }}>
            <TouchableOpacity>
            <View style={styles.dalem}></View>
            </TouchableOpacity>
        </View>
        <View style={{
            backgroundColor: 'red',
            width: '40%',
            height: '40%',
            borderRadius: 30,
        }}>
            <TouchableOpacity>
            <View style={styles.dalem}></View>
            </TouchableOpacity>
        </View>
        </View>
        <View style={{
            flexDirection: 'row',
            //backgroundColor: 'green',
            width: '90%',
            height: '40%',
            bottom: '1%',
            position: 'absolute',
            justifyContent: 'space-evenly'

        }}>
        <View style={{
            backgroundColor: 'black',
            width: '40%',
            height: '40%',
            top: '45%',
            borderRadius: 30,
        }}>
            <TouchableOpacity>
            <View style={styles.dalem}></View>
            </TouchableOpacity>
        </View>
        <View style={{
            backgroundColor: 'grey',
            width: '40%',
            height: '40%',
            top: '45%',
            borderRadius: 30,
        }}>
            <TouchableOpacity>
            <View style={styles.dalem}></View>
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
  header: {
    width: '90%',
    height: '20%',
    position: 'relative',
    alignSelf: 'center',
    bottom: '25%',
    //backgroundColor: 'yellow'
  },
  buatBuah:{
    width: 160,
    height: 160,
    left: '40%',
    resizeMode: 'contain',
    alignSelf:'center'
  },
  namabuah : {
    fontSize: 40,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white',
    left: '50%',
    top: '35%'
  },
  namalatin: {
    fontSize: 25,
    fontFamily: 'sans-serif-light',
    fontStyle: 'italic',
    color: 'white',
    top: '35%',
    left: '50%',
  },
  gambarbuah : {
    width: '30%',
    height: '30%',
    top: '5%',
    alignSelf:'flex-start',
    position: 'absolute',
  },
  dalem : {
      width: '100%',
      height: '100%',
      borderRadius: 30,
      backgroundColor: '#E2FFF9'
  }
});
