import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'native-base';
import { render } from 'react-dom';


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
    return fetch('http://192.168.1.2:8000/api/buahJenis?id='+this.props.navigation.state.params.id,{
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
        width: 100,
        height: 25,
        position: 'relative',
        alignSelf: 'flex-start',
        bottom: 30,
        left: 30,
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
          fontSize: 22,
          fontFamily: 'sans-serif-light',
          fontStyle: 'italic',
          color: 'white',
        }}>({this.state.latin})</Text>
        </View>
      <View style={styles.isiK}>
        <SafeAreaView>
        <View style={{
          alignItems: 'center',
          alignSelf: 'center',
          width: 350,
          height: 500,
          position: 'relative',
          bottom: 15,
        }}><Text style={{fontSize: 25,}}>{this.state.keterangan}</Text>
          </View>
          </SafeAreaView>
          <View style={{
              width: 170,
              height: 170,
              alignSelf: 'flex-end',
              position: 'relative',
              bottom: 690,
              right: 20,
            }}><Image source={{uri:'http://192.168.1.2:8000/img/'+this.state.gambar}} style={styles.buatBuah}/></View>
      </View>
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: 380,
    height: 550,
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