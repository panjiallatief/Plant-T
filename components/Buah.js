import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'native-base';
import { render } from 'react-dom';
import { ScrollView } from 'react-native-gesture-handler';


export default class Buahk extends Component {
  constructor(props){
    super(props);
    this.state ={
      nama: '',
      keterangan: '',
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
        keterangan: json.ket,
        gambar: json.gambar,
        latin: json.latin,
      });
      console.log(json.nama)
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={{
        width: '30%',
        height: '5%',
        position: 'relative',
        alignSelf: 'flex-start',
        bottom: '3%',
        left: '5%',
      }}><TouchableOpacity 
      onPress={() => this.props.navigation.goBack()}>
      <Text style={{
        fontSize: 25,
        color: 'white',
        alignSelf:'flex-start',
        position: 'relative',
      }}><Icon type="FontAwesome" name='arrow-left' style={{color: 'white'}}/> Kembali</Text>
      </TouchableOpacity></View>
      <View style={styles.header}>
        <Text style={{
          fontSize: 40,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'white',
        }}>{this.state.nama}</Text>
        <Text style={{
          fontSize: 25,
          fontFamily: 'sans-serif-light',
          fontStyle: 'italic',
          color: 'white',
        }}>{this.state.latin}</Text>
        </View>
      <View style={styles.isiK}>
        <SafeAreaView style={{
          height: '103%',
          bottom: 21,
          borderRadius: 30,
          width: '100%',
        }}>
        <ScrollView 
        showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 23, paddingHorizontal: '3%', textAlign: 'justify', paddingTop: '2%'}}>{this.state.keterangan}</Text>
        </ScrollView>
        </SafeAreaView>
    </View><View style={{
              width: '30%',
              height: '30%',
              top: '20%',
              right: '10%',
              position: 'absolute',
            }}><Image source={{uri:'https://spkbuah.patunganbersama.com/img/'+this.state.gambar}} style={styles.buatBuah}/></View>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1BBC9B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isiK:{
    backgroundColor: '#E2FFF9',
    borderRadius: 30,
    width: '90%',
    height: '60%',
    position: 'relative',
    top: 80,
  },
  header: {
    width: 200,
    height: 80,
    position: 'relative',
    top: 10,
    left: 30,
    alignSelf: 'flex-start'
  },
  buatBuah:{
    width: 160,
    height: 160,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
    resizeMode: 'contain',
    alignSelf:'center'
  },
});