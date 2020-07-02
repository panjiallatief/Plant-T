import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Awalan from './Awalan';
import Beranda from './Beranda';
import Buah from './Buah';
import HasilSurvei from './HasilSurvei';
import Survei from './Survei';


const HomePage = createStackNavigator({
    'Splash' : {
        screen : Awalan
    },
    'Home' : {
        screen : Beranda
    },
    'Isi' : {
        screen : Buah
    },
    'Hasil': {
        screen : HasilSurvei
    },
    'SPK' : {
        screen : Survei
    }
},{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })

const Main =createAppContainer(HomePage);

export default Main;