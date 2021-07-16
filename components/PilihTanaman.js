import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight, Image, useWindowDimensions, Dimensions} from 'react-native';

export default class Pilih extends Component {
  constructor(props){
    super(props);
    this.state ={
      apel:'',
      anggur:'',
      naga:'',
      delima:'',
      durian:'',
      duwet:'',
      jambu:'',
      jeruk:'',
      leci:'',
      mangga:'',
      markisa:'',
      melon:'',
      nanas:'',
      pepaya:'',
      pisang:'',
      sawo:'',
      semangka:'',
      sirsak:'',
      srikaya:'',
      timunsuri:'',
    }
  }
  componentDidMount(){
    return fetch('https://spkbuah.patunganbersama.com/api/buah',{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response)=>response.json())
    .then((json)=> {
      this.setState({
        apel: json.buah[0],
        anggur:json.buah[1],
        naga:json.buah[2],
        delima:json.buah[3],
        durian:json.buah[4],
        duwet:json.buah[5],
        jambu:json.buah[6],
        jeruk:json.buah[7],
        leci:json.buah[8],
        mangga:json.buah[9],
        markisa:json.buah[10],
        melon:json.buah[11],
        nanas:json.buah[12],
        pepaya:json.buah[13],
        pisang:json.buah[14],
        sawo:json.buah[15],
        semangka:json.buah[16],
        sirsak: json.buah[17],
        srikaya: json.buah[18],
        timunsuri:json.buah[19],
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Pilih tanaman yang ingin di tanam?</Text>
        </View>
        <View style={{
            width: '100%',
            height: '70%',
            top: 100,
            flexDirection: 'column',
        }}>
            <ScrollView style={{
                marginBottom: 10,
            }}>
                <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Info',{id:1})}>
                        <View style={styles.dalem}>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/apple.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.apel.nama}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:2})}>
                        <View style={styles.dalem}>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/anggur.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.anggur.nama}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
            </View>
            
            <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:3})}>
                        <View style={styles.dalem}>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/naga.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.naga.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:4})}>
                        <View style={styles.dalem}>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/delima.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.delima.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
            </View>

            <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:5})}>
                        <View style={styles.dalem}>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/durian.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.durian.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:6})}>
                        <View style={styles.dalem}>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/duwet.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.duwet.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
            </View>

            <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:7})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/jambu.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.jambu.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:8})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/jeruk.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.jeruk.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
            </View>

            <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:9})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/leci.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.leci.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:10})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/mangga.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.mangga.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
            </View>

            <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:11})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/markisa.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.markisa.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:12})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/melon.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.melon.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
            </View>
            
            <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:13})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/nanas.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.nanas.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:14})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/pepaya.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.pepaya.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
            </View>

            <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:15})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/pisang.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.pisang.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:16})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/sawo.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.sawo.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
            </View>

            <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:17})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/semangka.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.semangka.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:18})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/sirsak.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.sirsak.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
            </View>

            <View style={styles.layer}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:19})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/srikaya.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.srikaya.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:20})}>
                        <View style={styles.dalem}>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/timunsuri.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.timunsuri.nama}</Text>
                        </View>
                        </TouchableOpacity>
                        </View>
            </View>
            </ScrollView>
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
    color: 'white',
    justifyContent:'flex-start',
    position: 'relative',
    top : '70%',
    paddingHorizontal: '5%'
  },
  TextBuah:{
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'relative',
    bottom: 5,
  },
  buatBuah:{
    width: 100,
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    resizeMode: 'contain',
    alignSelf:'center',
  },
  layer: {
    width: '100%',
    height: 200,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //backgroundColor: 'yellow'
  },
  boxContent:{
    width: '40%',
    height: '85%',
    backgroundColor: '#E2FFF9',
    borderRadius: 30,
  },
  BG:{
    width: '100%',
    height: '70%',
    position: 'absolute',
    alignSelf: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  badan:{
    flex: 1,
  },
  desText:{
    position:'relative',
    top: '13%',
    paddingHorizontal: '4%',
    textAlign: 'justify',
  },
  dalem : {
    width: '100%',
    borderRadius: 30,
    height : '100%',
    alignSelf: 'center',
  },

  
});
