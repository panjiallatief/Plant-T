import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'native-base';


export default class Awalan extends Component{
    constructor(props){
        super(props);
        this.state ={
          tipe:this.props.navigation.state.params.id,
          avail:true,
          ph:"",
          suhu:"",
          musim:""
        }
      }
      componentDidMount(){
        return fetch('http://192.168.1.2:8000/api/survei?tipe='+this.state.tipe,{
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((response)=>response.json())
        .then((json)=> {
          this.setState({
              pertanyaan:json.pertanyaan,
              opsi_a:json.opsi_a,
              opsi_b:json.opsi_b,
              opsi_c:json.opsi_c,
              tipe: 2
          });
        })
        .catch((error) => {
          console.error(error);
        });
      }
      _jawab(opsi){
        if(this.state.tipe>3){
            this.props.navigation.navigate('Hasil',{ph:this.state.ph,suhu:this.state.suhu,musim:opsi})
        }else{
            if(this.state.tipe==2){
                this.setState({
                    ph:opsi
                });
            }else if(this.state.tipe==3){
                this.setState({
                    suhu:opsi
                });
            }
            console.log(this.state.tipe)
            this.setState({
                tipe: this.state.tipe+1
            });
            console.log(opsi)
            return fetch('http://192.168.1.2:8000/api/survei?tipe='+this.state.tipe,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then((response)=>response.json())
            .then((json)=> {
            this.setState({
                pertanyaan:json.pertanyaan,
                opsi_a:json.opsi_a,
                opsi_b:json.opsi_b,
                opsi_c:json.opsi_c,
                
            });
            if(json.opsi_c==""){
                this.setState({
                    avail:false
                });
            }
            })
            .catch((error) => {
            console.error(error);
            });
        }
      }
  render(){
  return (
    <View style={styles.container}>
        <View style={styles.surveibox}>
            <SafeAreaView style={{
                width: 325,
                height: 250,
                alignSelf: 'center',
                marginVertical: 10,
            }}>
            <Text style={styles.tanyatext}>{this.state.pertanyaan}</Text> 
            </SafeAreaView>
            <TouchableOpacity
                        onPress={this._jawab.bind(this,this.state.opsi_a)}>       
                <View style={styles.buton}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 25,
                        color: "#1BBC9B",
                        alignSelf: 'center'
                    }}>{this.state.opsi_a}</Text>
                    </View>
                    </TouchableOpacity>
            <TouchableOpacity
                        onPress={this._jawab.bind(this,this.state.opsi_b)}>         
                <View style={styles.buton}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 25,
                        color: "#1BBC9B",
                        alignSelf: 'center'
                    }}>{this.state.opsi_b}</Text>
                    </View>
                    </TouchableOpacity>
                    
                    {this.state.avail && 
            <TouchableOpacity
                            onPress={this._jawab.bind(this,this.state.opsi_c)}>         
                    <View style={styles.buton}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 25,
                            color: "#1BBC9B",
                            alignSelf: 'center'
                        }}>{this.state.opsi_c}</Text>
                        </View>
                        </TouchableOpacity>
                    }
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
  surveibox: {
      alignSelf: 'center',
      width: 350,
      height: 600,
      borderRadius: 30,
      backgroundColor: '#E2FFF9',
  },
  tanyatext: {
      textAlign: 'center',
      fontSize: 30,
      paddingVertical: 60,
  },
  buton:{
    width: 200,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});