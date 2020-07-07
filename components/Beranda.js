import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight, Image, useWindowDimensions} from 'react-native';
import { Icon } from 'native-base';
import { PanGestureHandler } from 'react-native-gesture-handler';


export default class Beranda extends Component {
  constructor(props){
    super(props);
    this.state ={
      apel:'',
      durian:'',
      nanas:'',
      naga:'',
      pepaya:'',
      pisang:'',
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
        durian: json.buah[1],
        nanas: json.buah[2],
        naga: json.buah[3],
        pepaya: json.buah[4],
        pisang: json.buah[5],
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
        <Text style={styles.text_header}>Tanaman apa yang ingin anda tanam ?</Text>
        </View>
            <ScrollView horizontal 
            showsHorizontalScrollIndicator={false}
            >
              <View style={{
                flexDirection: 'row',
                }}>
                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:1})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/apple.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.apel.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.apel.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:2})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar2.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/durian.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.durian.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.durian.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:3})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar3.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/nanas.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.nanas.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.nanas.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:4})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar4.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/naga.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.naga.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.naga.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:5})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar5.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/pepaya.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.pepaya.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.pepaya.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:6})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar6.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/pisang.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.pisang.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.pisang.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                      <View style={[[styles.boxContent],{backgroundColor: '#E2FFF9'}]}>
                      <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('SPK',{id:1})}>
                        <SafeAreaView style={{                 
                          width : '100%',
                          height : '100%',
                          alignSelf: 'center',
                        }}>
                        <Text style={{
                          fontSize: 70,
                          fontWeight: 'bold',
                          color: "#1BBC9B",
                          textAlign: 'justify',
                          position: 'relative',
                          top: '30%',
                          left: '5%'
                        }}>Mulai Survei</Text>
                        <Icon type="FontAwesome" name='arrow-right' style={{
                          color: '#1BBC9B',
                          position: 'relative',
                          alignSelf: 'center',
                          top: '40%',

                          }}/>
                        </SafeAreaView>
                        </TouchableOpacity>
                    </View>
                    </View>
            </ScrollView>
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
    top : '150%',
    paddingHorizontal: '5%'
  },
  TextBuah:{
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'relative',
    top: 50,
  },
  buatBuah:{
    width: 150,
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 70,
    marginBottom: 15,
    resizeMode: 'contain',
    alignSelf:'center'
  },
  boxContent:{
    width : '12.6%',
    height : 400,
    borderRadius : 30,
    position: 'relative',
    top : '9%',
    marginLeft: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
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
    top: '12%',
    paddingHorizontal: 10,
    textAlign: 'justify',
  },
  dalem : {
    width : 257,
    borderRadius: 30,
    height : '100%',
    alignSelf: 'center',
  },

  
});
