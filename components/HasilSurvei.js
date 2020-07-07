import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity, ListView,FlatList, Platform, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'native-base';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class HasilSurvei extends Component {
    constructor(props){
        super(props);
        this.state ={
          ph:this.props.navigation.state.params.ph,
          suhu:this.props.navigation.state.params.suhu,
          musim:this.props.navigation.state.params.musim
        }
      }
      componentDidMount(){
        return fetch('https://spkbuah.patunganbersama.com/api/hasil?ph='+this.state.ph+'&suhu='+this.state.suhu+'&musim='+this.state.musim,{
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
              <View style={{}}>
                  <Text style={{
                      fontFamily: 'sans-serif-medium',
                      color: 'white',
                      fontSize: 40,
                      position: 'relative',
                      top : '10%',
                      right: '2%',
                      marginBottom: '20%',
                      marginTop: '15%', 
                  }}>Hasil Survei</Text>
              <View>
                  { this.state.avail ? null : <CustomFlat/>}
                  {this.state.avail &&
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data = {this.state.data}
                    renderItem = {({item, index, separators}) => (
                      <View style={{
                        width : 250,
                        height: 150,
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
                                  width: 100, 
                                  height: 100
                                  }}/>
                                  <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                  }}>{item.nama}</Text>
                            </View>
                        </TouchableOpacity>
                        
                          </View>
                    )}
                    />
                    }
                  </View>
                  
          </View>
              </View>
          
        );
      }
};
const CustomFlat = () =>(  
    <FlatList
    data = {[{title: 'Data Tidak Ditemukan', key: 'item1'}]}
    renderItem = {({item, index, separators}) => (
        <TouchableHighlight
        key={item.key}
        >
            <View>
                <Text>{item.title}</Text>
            </View>
        </TouchableHighlight>
    )} 
    />
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1BBC9B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buton:{
      width: 200,
      height: 50,
      borderRadius: 30,
      alignContent: 'center',
      backgroundColor: 'white',
      position: 'relative',
      bottom: '10%',
    },
});