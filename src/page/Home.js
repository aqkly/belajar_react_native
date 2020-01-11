import React, { Component } from "react";
import { Image } from 'react-native';
import { Container, Header, Button,Text,Title,View, Grid,Col,H2,Icon,Footer, FooterTab, Left, Right, Body, Content,Card,CardItem } from "native-base";
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#00D33A'}}>
          <Left>
            <Button transparent onPress={()=>{Actions.mulai()}}>
              <Icon style={{color:'#000000'}} type="FontAwesome" name='chevron-left' />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'#000000'}}>Home</Title>
          </Body>
          <Right>
            <Button transparent>
            <Icon style={{color:'#000000'}} type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>

        <Content>
           <View style={{padding:10}}>
            <Card>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}} button onPress={()=>{Actions.artikelSatu()}}>
              <Grid style={{height:150}}>
              <Col style={{width:'50%'}}>
                  <Image source={require('../images/love.jpg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:30,paddingTop:50}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Berbagai Olahan</Text>
                    <Text style={{color:'#00D33A'}}>Buah dan Sayur</Text>
                  </View>  
                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card> 

            <View style={{paddingBottom:5}}/>

            <Card>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}} button onPress={()=>{Actions.buah()}}>
              <Grid style={{height:150}}>
              <Col style={{width:'50%'}}>
                  <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Image source={require('../images/g.jpeg')} style={{height:70, width: '50%', borderRadius:10}}/>
                    <View style={{paddingLeft:10}} />
                    <Image source={require('../images/e.jpeg')} style={{height:70, width: '50%', borderRadius:10}}/>
                  </View>
                  <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Image source={require('../images/p.jpeg')} style={{height:70, width: '50%', borderRadius:10}}/>
                    <View style={{paddingLeft:10}} />
                    <Image source={require('../images/i.jpeg')} style={{height:70, width: '50%', borderRadius:10}}/>
                  </View>
              </Col>
              <Col style={{paddingLeft:30,paddingTop:50}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Cari tahu informasi</Text>
                    <Text style={{color:'#00D33A'}}>Tentang buah yu</Text>
                  </View>  
                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card>

            <View style={{paddingBottom:5}}/>

            <Card>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}} button onPress={()=>{Actions.sayuran()}}>
              <Grid style={{height:150}}>
              <Col style={{width:'50%'}}>
                  <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Image source={require('../images/bayam.jpeg')} style={{height:70, width: '50%', borderRadius:10}}/>
                    <View style={{paddingLeft:10}} />
                    <Image source={require('../images/images4.jpeg')} style={{height:70, width: '50%', borderRadius:10}}/>
                  </View>
                  <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Image source={require('../images/images5.jpeg')} style={{height:70, width: '50%', borderRadius:10}}/>
                    <View style={{paddingLeft:10}} />
                    <Image source={require('../images/Wortel.jpg')} style={{height:70, width: '50%', borderRadius:10}}/>
                  </View>
              </Col>
              <Col style={{paddingLeft:30,paddingTop:50}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Cari tahu informasi</Text>
                    <Text style={{color:'#00D33A'}}>Tentang sayur yu</Text>
                  </View>  
                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card> 

            <View style={{paddingBottom:5}}/>

            <Card>
            <CardItem style={{borderRadius:10,backgroundColor:'#C6FFBD'}} button onPress={()=>{Actions.artikelDua()}}>
              <Body>
                <Text style={{color:'#00D33A',paddingLeft:50}}>6 Alasan pentingnya kita makan</Text>
                <Text style={{color:'#00D33A',paddingLeft:70}}>Banyak buah dan sayuran</Text>
              </Body>
            </CardItem>
          </Card>

            </View>
        </Content>
         <Footer>
          <FooterTab style={{backgroundColor:'#00D33A'}}>
            <Button vertical>
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