import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity, ListView,FlatList, Platform, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class HasilSurvei extends Component {
    constructor(props){
        super(props);
        this.state ={
          ph:this.props.navigation.state.params.ph,
          suhu:this.props.navigation.state.params.suhu,
          musim:this.props.navigation.state.params.musim,
          tinggi:this.props.navigation.state.params.tinggi,
          curah:this.props.navigation.state.params.curah,
          ubuah:this.props.navigation.state.params.ubuah,
          batang:this.props.navigation.state.params.batang,
          matang:this.props.navigation.state.params.matang,
        }
      }
      componentDidMount(){
        return fetch('https://spkbuah.patunganbersama.com/api/hasil?ph='+this.state.ph+'&suhu='+this.state.suhu+'&tinggi='+this.state.tinggi+'&batang='+this.state.batang+'&ubuah='+this.state.ubuah+'&matang='+this.state.matang+'&curah='+this.state.curah+'&musim='+this.state.musim,{
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((response)=>response.json())
        .then((json)=> {
            this.setState({
                data:json.buah,
                avail:json.avail
            });
          console.log(json.buah[0].gambar)
        })
        .catch((error) => {
          console.error(error);
        });
      }
    render(){
        return (
          <View style={styles.container}>
              <View>
                  <Text style={{
                      fontFamily: 'sans-serif-medium',
                      color: 'white',
                      fontSize: 40,
                      position: 'absolute',
                      top : '3%',
                      right: '45%',
                      marginTop: '5%', 
                  }}>Hasil Survei</Text>
              <View style={{alignSelf: 'center', top: '10%'}}>
                <SafeAreaView style={{backgroundColor: '',
                alignItems: 'center',
              height: '90%',
              width: Dimensions.get('window').width,
              }}>
                  { this.state.avail ? null : <CustomFlat/>}
                  {this.state.avail &&
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data = {this.state.data}
                    renderItem = {({item, index, separators}) => (
                      <View style={{
                        width : 320,
                        height: 200,
                        borderRadius: 20,
                        position: 'relative',
                        backgroundColor: '#E2FFF9',
                        margin: 10,
                      }}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Isi',{id:item.id})}
                        key={item.id}
                        >
                            <View style={{
                              alignItems: 'center',
                              paddingVertical: 20,
                              }}>
                                
                                <Image source={{uri:'https://spkbuah.patunganbersama.com/img/'+item.gambar}} style={{
                                  width: 150, 
                                  height: 150
                                  }}/>
                                  <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                  }}>{item.nama}</Text>
                            </View>
                        </TouchableOpacity>
                        
                          </View>
                    )}
                    />
                    }
                  </SafeAreaView></View>
          </View>
                  <View style={styles.buton}>
                  <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
              <SafeAreaView style={{width: 245, justifyContent: 'center', alignItems: 'center', borderRadius: 30}}>
                    <Text style={{fontSize: 25,color: '#1BBC9B', position: 'absolute'}}>Kembali</Text>
                    </SafeAreaView>
                    </TouchableOpacity>
                  </View>
              </View>
          
        );
      }
};
const CustomFlat = () =>(  
    <FlatList
    data = {[{key: 'item1'}]}
    renderItem = {({item, index, separators}) => (
        <TouchableHighlight
        key={item.key}>
    <View style={{
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
      alignItems: 'center',
    }}>
        <Image source={require('../assets/oops.png')} style={{
          alignSelf: 'center',
          width: 290, 
          height: 205,
          position: 'relative',
          top: 100,
        }}/>
        <Text style={{
          fontSize: 50,
          fontWeight: 'bold',
          position: 'relative',
          top: '10%',
          right: '20%',
          color: 'white',
        }}>OOPS!</Text>
        <Text style={{
          fontSize: 20,
          top: '10%',
          right: '11%',
          color: 'white'
        }}>Tanaman yang kamu cari</Text>
        <Text style={{
          fontSize: 33,
          color: 'white',
          fontWeight: 'bold',
          top: '10%',
          right: '10%'
        }}>Belum Tersedia</Text>
    </View>
        </TouchableHighlight>
    )}/>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1BBC9B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buton:{
      width: '57%',
      height: '6%',
      borderRadius: 30,
      backgroundColor: 'white',
      position: 'relative',
      alignSelf: 'center',
      position: 'absolute',
      bottom: '6%',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 2,
    },
});