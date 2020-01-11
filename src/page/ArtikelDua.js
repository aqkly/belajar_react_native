import React, { Component } from "react";
import { Image } from 'react-native';
import { Container, Header, Button,Text,Title,View, Grid,Col,H2,Icon,Footer, FooterTab, Left, Right, Body, Content,Card,CardItem } from "native-base";
import { Actions } from 'react-native-router-flux';

export default class Buah extends Component {
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
            <Title style={{color:'#000000'}}>Artikel</Title>
          </Body>
          <Right>
            <Button transparent>
            <Icon style={{color:'#000000'}} type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>
      
        <Content>
        <View style={{paddingTop:10}} />
         <Card style={{borderRadius:20}}>
            <CardItem style={{backgroundColor:'#C6FFBD',height:520,borderRadius:20}}>
            <Body>
                <Text style={{paddingLeft:50}}>6 Alasan Pentingnya Kita Makan</Text>
                <Text style={{paddingLeft:73}}>Banyak Buah dan Sayuran</Text>
              <View style={{paddingTop:50}}/>
              <Text>1. Mereka punya banyak sekali nutrisi yang dibutuhkan tubuh kita</Text>
              <Text>2. Mengandung Kalori yang sangat rendah</Text>
              <Text>3. Bisa mencegah penyakit masuk ke tubuh kita </Text>
              <Text>4. Buah dan Sayur masih tergolong murah</Text>
              <Text>5. Berserat</Text>
              <Text>6. Rasanya tetap enak walau dimakan mentah</Text>
              <View style={{paddingTop:40}}/>
              <Image source={require('../images/h.jpeg')} style={{height:150, width: '100%', borderRadius:10}}/>
              </Body>
            </CardItem>
          </Card>


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