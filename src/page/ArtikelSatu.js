import React, { Component } from "react";
import { ImageBackground, Image } from 'react-native';
import { Container, Header, Button,Text,Title,View, Grid,Col,H2,Icon,Footer, FooterTab, Left, Right, Body, Content,Card,CardItem } from "native-base";
import { Actions } from 'react-native-router-flux';

export default class ArtikelSatu extends Component {
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
        <View style={{paddingTop:10}}/>
        <Card>
            <CardItem style={{borderRadius:10,backgroundColor:'#EFEFEF'}}>
            <Left>
                <Icon name="search" type="EvilIcons"/>
            </Left>
              <Body>
                <Text>Cari disini ....</Text>
              </Body>
              <Right/>
            </CardItem>
        </Card>

        <View style={{paddingTop:10}}/>

        <Text style={{fontSize:20}}>Terpopuler</Text>

        <View style={{paddingTop:10}}/>

        <View style={{flex: .5,flexDirection: 'row',alignItems: 'flex-start'}}>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/b.jpg')} style={{height:100, width: '30%', borderRadius:10}}/>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/images18.jpeg')} style={{height:100, width: '30%', borderRadius:10}}/>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/c.jpg')} style={{height:100, width: '30%', borderRadius:10}}/>
        </View>

        <View style={{paddingTop:10}}/>

        <Text style={{fontSize:20}}>Olahan Buah</Text>

        <View style={{paddingTop:10}}/>

        <View style={{flex: .5,flexDirection: 'row',alignItems: 'flex-start'}}>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/b.jpg')} style={{height:100, width: '22%', borderRadius:10}}/>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/c.jpg')} style={{height:100, width: '22%', borderRadius:10}}/>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/f.jpg')} style={{height:100, width: '22%', borderRadius:10}}/>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/a.jpg')} style={{height:100, width: '22%', borderRadius:10}}/>
        </View>

        <View style={{flex: .5,flexDirection: 'row',alignItems: 'flex-start'}}>
          <View style={{paddingLeft:40}} />
          <Text>Pie</Text>
          <View style={{paddingLeft:30}} />
          <Text>Pizza Buah</Text>
          <View style={{paddingLeft:10}} />
          <Text>Es Krim Buah</Text>
          <View style={{paddingLeft:10}} />
          <Text>Sop Buah</Text>
        </View>

        <View style={{paddingTop:10}}/>

        <Text style={{fontSize:20}}>Olahan Sayur</Text>

        <View style={{paddingTop:10}}/>

        <View style={{flex: .5,flexDirection: 'row',alignItems: 'flex-start'}}>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/images17.jpeg')} style={{height:100, width: '22%', borderRadius:10}}/>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/images15.jpeg')} style={{height:100, width: '22%', borderRadius:10}}/>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/images16.jpeg')} style={{height:100, width: '22%', borderRadius:10}}/>
          <View style={{paddingLeft:10}} />
          <Image source={require('../images/images18.jpeg')} style={{height:100, width: '22%', borderRadius:10}}/>
        </View>

        <View style={{flex: .5,flexDirection: 'row',alignItems: 'flex-start'}}>
          <View style={{paddingLeft:10}} />
          <Text>Kangkung</Text>
          <View style={{paddingLeft:10}} />
          <Text>Sayur Sop</Text>
          <View style={{paddingLeft:5}} />
          <Text>Tumis Brokoli</Text>
          <View style={{paddingLeft:5}} />
          <Text>Sayur Asem</Text>
        </View>

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