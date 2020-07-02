import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Navigation';
import Awalan from './components/Awalan';
import Beranda from './components/Beranda';
import Buah from './components/Buah';

export default function App() {
  return (
    <Main/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
