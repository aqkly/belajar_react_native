import React, { Component } from "react";
import { Image } from 'react-native';
import { Container, Header, Button,Text,Title,View, Grid,Col,H2,Icon,Footer, FooterTab, Left, Right, Body, Content,Card,CardItem } from "native-base";
import { Actions } from 'react-native-router-flux';

export default class Profil extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#00D33A'}}>
          <Left>
            <Button transparent onPress={()=>{Actions.home()}}>
              <Icon style={{color:'#000000'}} type="FontAwesome" name='chevron-left' />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'#000000'}}>Profile</Title>
          </Body>
          <Right>
            <Button transparent>
            <Icon style={{color:'#000000'}} type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>

        <Content style={{backgroundColor:'#C6FFBD'}}>
        <Text style={{fontStyle:'italic',paddingLeft:130,paddingTop:20}}>Nama Univ Anda</Text>
        <View style={{paddingTop:0}} />
         <Card style={{height:150, width:150, alignSelf:"center", borderRadius:100, marginTop:25}}>
            <CardItem cardBody style={{borderRadius:150}}>
                <Image source={require('../images/prof.jpeg')} style={{height: 150, width:null, flex:1, borderRadius:100}} />
            </CardItem>
          </Card>

         <View style={{paddingTop:30}} />
         <Text>Nama</Text>
         <View style={{paddingTop:10}} />
         <Text style={{paddingLeft:30}}>Nama Anda</Text>
         <View style={{borderWidth:1,color:'#C6FFBD'}} />

          <View style={{paddingTop:30}} />
         <Text>NIM</Text>
         <View style={{paddingTop:10}} />
         <Text style={{paddingLeft:30}}>Nim Anda</Text>
         <View style={{borderWidth:1,color:'#C6FFBD'}} />

         <View style={{paddingTop:30}} />
         <Text>Kelas</Text>
         <View style={{paddingTop:10}} />
         <Text style={{paddingLeft:30}}>Kelas Anda</Text>
         <View style={{borderWidth:1,color:'#C6FFBD'}} />

         
         <Text style={{paddingLeft:100,paddingTop:30}}>Jurusan Anda</Text>
        
        </Content>
         <Footer>
          <FooterTab style={{backgroundColor:'#00D33A'}}>
            <Button vertical onPress={()=>{Actions.home()}}>
              <Icon type="FontAwesome" name="home" style={{color:'white'}} />
            </Button>
            <Button vertical onPress={()=>{Actions.profil()}}>
              <Icon type="AntDesign" name="smileo" style={{color:'white'}} />
            </Button>
          </FooterTab>
        </Footer>
      
       
    </Container>
    );
  }
}