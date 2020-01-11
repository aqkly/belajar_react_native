import React, { Component } from "react";
import { ImageBackground, Image } from 'react-native';
import { Container,Text,Content, Form, Item, Input,Button,Icon,View,H1 } from "native-base";
import { Actions } from 'react-native-router-flux';

export default class Mulai extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#C6FFBD'}}>
        <View style={{paddingTop:30}} />
        <ImageBackground source={require('../images/wel.jpeg')} style={{width: '100%',height: '95%'}}>
          <View style={{paddingTop:90}}/>
          <H1 style={{color:'#ffffff',paddingLeft:100,fontWeight:'bold'}}>Buah dan Sayur</H1>
          <Text style={{color:'#ffffff',paddingLeft:30,fontSize:20}}>Beragam manfaat buah dan sayuran</Text>
          <View style={{paddingTop:300}}/>
          <Button success style={{marginLeft:100,marginRight:100,borderRadius:10}} onPress={()=>{Actions.home()}}>
            <Text style={{paddingLeft:50}}>Mulai</Text>
          </Button>
          <View style={{paddingTop:10}}/>
          <Text style={{color:'#ffffff',paddingLeft:40}}>Dengan klik tombol mulai anda sudah</Text>
          <Text style={{color:'#ffffff',paddingLeft:60}}>meyetujui syarat yang berlaku</Text>
        </ImageBackground>
      </Container>

    );
  }
}