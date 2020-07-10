import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight, Image, useWindowDimensions, Dimensions} from 'react-native';
import { Icon } from 'native-base';
import { PanGestureHandler } from 'react-native-gesture-handler';


export default class Beranda extends Component {
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
        <Text style={styles.text_header}>Tanaman apa yang ingin anda tanam ?</Text>
        </View>
            <ScrollView horizontal 
            showsHorizontalScrollIndicator={false}
            >
              <View style={{
                flexDirection: 'row',
                marginRight: 80,
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
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/anggur.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.anggur.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.anggur.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:3})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar3.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/naga.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.naga.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.naga.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:4})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar4.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/delima.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.delima.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.delima.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:5})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar5.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/durian.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.durian.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.durian.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi',{id:6})}>
                        <SafeAreaView style={styles.dalem}>
                      <Image source={require('../src/dasar6.png')} style={styles.BG}/>
                      <Image source={{uri:'https://spkbuah.patunganbersama.com/img/duwet.png'}} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>{this.state.duwet.nama}</Text>
                      <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.duwet.ket}</Text>
                      </SafeAreaView>
                      </TouchableOpacity>
                    </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:7})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/jambu.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.jambu.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.jambu.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:8})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar2.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/jeruk.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.jeruk.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.jeruk.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:9})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar5.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/leci.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.leci.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.leci.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:10})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar3.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/mangga.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.mangga.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.mangga.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:11})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/markisa.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.markisa.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.markisa.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:12})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar2.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/melon.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.melon.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.melon.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:13})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar4.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/nanas.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.nanas.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.nanas.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:14})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/pepaya.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.pepaya.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.pepaya.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:15})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar6.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/pisang.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.pisang.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.pisang.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:16})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar2.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/sawo.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.sawo.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.sawo.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:17})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/semangka.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.semangka.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.semangka.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:18})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar3.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/sirsak.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.sirsak.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.sirsak.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:19})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar4.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/srikaya.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.srikaya.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.srikaya.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.boxContent}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Isi',{id:20})}>
                      <SafeAreaView style={styles.dalem}>
                    <Image source={require('../src/dasar.png')} style={styles.BG}/>
                    <Image source={{uri:'https://spkbuah.patunganbersama.com/img/timunsuri.png'}} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>{this.state.timunsuri.nama}</Text>
                    <Text numberOfLines={4} width="100%" style={styles.desText}>{this.state.timunsuri.ket}</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>
                    </View>
            </ScrollView>
            <View>
              
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('SPK',{id:1})}>
                <SafeAreaView style={{
                height: 60,
                width: 280,
                position: 'relative',
                marginBottom: '10%',
                borderRadius: 30,
                backgroundColor: '#E2FFF9',
                justifyContent: 'center',
                alignItems: 'center'
              }}><Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 20, color: '#1BBC9B'}}>Mulai Survei <Icon type="FontAwesome" name='arrow-right' style={{
                color: '#1BBC9B',
                position: 'relative',
                }}/></Text>
              </SafeAreaView>
                </TouchableOpacity>
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
    top : '120%',
    paddingHorizontal: '5%'
  },
  TextBuah:{
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'relative',
    top: '12%',
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
    width : '4.5%',
    height : 400,
    borderRadius : 30,
    position: 'relative',
    top : '3%',
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
    top: '13%',
    paddingHorizontal: '4%',
    textAlign: 'justify',
  },
  dalem : {
    width : 257,
    borderRadius: 30,
    height : '100%',
    alignSelf: 'center',
  },

  
});
