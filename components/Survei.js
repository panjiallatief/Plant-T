import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default class Awalan extends Component{
    constructor(props){
        super(props);
        this.state ={
          tipe:this.props.navigation.state.params.id,
          avail:true,
          ph:"",
          suhu:"",
          musim:"",
          tinggi:"",
          curah:"",
          ubuah:"",
          batang:"",
          matang:"",
        }
      }
      componentDidMount(){
        return fetch('https://spkbuah.patunganbersama.com/api/survei?tipe='+this.state.tipe,{
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
              ket_p:json.ket_p,
              tipe: 2
          });
        })
        .catch((error) => {
          console.error(error);
        });
      }
      _jawab(opsi){
        if(this.state.tipe>=9){
            console.log("masih disini")
            this.props.navigation.navigate('Hasil',{ph:this.state.ph,suhu:this.state.suhu,tinggi:this.state.tinggi,batang:this.state.batang,ubuah:this.state.ubuah,matang:this.state.matang,curah:this.state.curah,musim:opsi})
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
            else if(this.state.tipe==4){
              this.setState({
                  tinggi:opsi
              });
          }
          else if(this.state.tipe==5){
            this.setState({
                batang:opsi
            });
        }
        else if(this.state.tipe==6){
          this.setState({
              ubuah:opsi
          });
      }
      else if(this.state.tipe==7){
        this.setState({
            matang:opsi
        });
    }
    else if(this.state.tipe==8){
      this.setState({
          curah:opsi
      });
  }
            console.log(this.state.tipe)
            this.setState({
                tipe: this.state.tipe+1
            });
            console.log(opsi)
            return fetch('https://spkbuah.patunganbersama.com/api/survei?tipe='+this.state.tipe,{
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
                ket_p:json.ket_p,
                
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
                bottom: '15%',
            }}>
            <Text style={styles.tanyatext}>{this.state.pertanyaan}</Text> 
            <Text style={styles.ketText}>{this.state.ket_p}</Text>
            </SafeAreaView>
            <TouchableOpacity
                        onPress={this._jawab.bind(this,this.state.opsi_a)}>       
                <View style={styles.buton}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 25,
                        color: "#1BBC9B",
                        alignSelf: 'center',
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
      paddingVertical: '50%',
  },
  ketText: {
    fontSize: 15,
    top: '65%',
    paddingHorizontal: '15%'
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