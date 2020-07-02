import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity, ListView,FlatList, Platform} from 'react-native';
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
        return fetch('http://192.168.1.2:8000/api/hasil?ph='+this.state.ph+'&suhu='+this.state.suhu+'&musim='+this.state.musim,{
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
                      position: 'relative',
                      top : 70,
                      right: 80, 
                      marginBottom: 20,
                  }}>Hasil Survei</Text>
              </View>
              <View style={{
                top:60,
                }}>
                  { this.state.avail ? null : <CustomFlat/>}
                  {this.state.avail &&
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data = {this.state.data}
                    renderItem = {({item, index, separators}) => (
                      <View style={{
                        width : 250,
                        height: 150,
                        borderTopLeftRadius : 20,
                        borderTopRightRadius : 20,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
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
                                
                                <Image source={{uri:'http://192.168.1.2:8000/img/'+item.gambar}} style={{
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
    box: {
        backgroundColor: '#E2FFF9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: 410,
        height: 654,
        position: 'relative',
        top: 108,
    },
    button:{
      width: 237,
      height: 40,
      borderRadius: 30,
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: '#1BBC9B',
      position: 'absolute',
      top: 560,
    },
});