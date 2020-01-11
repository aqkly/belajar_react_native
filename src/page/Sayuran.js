import React, { Component } from "react";
import { Image } from 'react-native';
import { Container, Header, Button,Text,Title,View, Grid,Col,H2,Icon,Footer, FooterTab, Left, Right, Body, Content,Card,CardItem } from "native-base";
import { Actions } from 'react-native-router-flux';

export default class Sayuran extends Component {
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
            <Title style={{color:'#000000'}}>Sayuran</Title>
          </Body>
          <Right>
            <Button transparent>
            <Icon style={{color:'#000000'}} type="FontAwesome" name='bell-o' />
            </Button>
          </Right>
        </Header>
      
        <Content>
          <View style={{padding:10}}>
            <Card style={{borderRadius:10}}>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}}>
              <Grid style={{height:200}}>
              <Col style={{width:'30%'}}>
                  <Image source={require('../images/Wortel.jpg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Mengkonsumsi wortel baik</Text>
                    <Text style={{color:'#00D33A'}}>untuk penglihatan pada mata,</Text>
                    <Text style={{color:'#00D33A'}}>terutama bisa meningkatkan</Text>
                    <Text style={{color:'#00D33A'}}>pandangan jarak jauh.</Text>
                    <Text style={{color:'#00D33A'}}>Kandungan vitamin : vitamin</Text>
                    <Text style={{color:'#00D33A'}}>A, B1, B2, B3, B6, B9, dan C</Text>
                    <Text style={{color:'#00D33A'}}>kalsium, zat besi, magnesium,</Text>
                    <Text style={{color:'#00D33A'}}>fosfor, kalium, dan sodium. </Text>
                  </View>
                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card> 
            
            <View style={{paddingBottom:10}}/>

             <Card style={{borderRadius:10}}>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}}>
              <Grid style={{height:150}}>
              <Col style={{width:'30%'}}>
                  <Image source={require('../images/images5.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat Kentang Kukus:</Text>
                    <Text style={{color:'#00D33A'}}>1. Kesehatan jantung</Text>
                    <Text style={{color:'#00D33A'}}>2. Fungsi Otak</Text>
                    <Text style={{color:'#00D33A'}}>3. Mencegah kanker</Text>
                    <Text style={{color:'#00D33A'}}>4. Mengatasi batu ginjal</Text>
                    <Text style={{color:'#00D33A'}}>5. Menyehatkan pencernaan</Text>
                    <Text style={{color:'#00D33A'}}>6. Kesehatan tulang & kulit</Text>
                  </View>
                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card> 

            <View style={{paddingBottom:10}}/>

            <Card style={{borderRadius:10}}>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}}>
              <Grid style={{height:200}}>
              <Col style={{width:'30%'}}>
                  <Image source={require('../images/images4.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat Sawi Putih :</Text>
                    <Text style={{color:'#00D33A'}}>1. Meningkatkan sistem kekebalan tubuh</Text>
                    <Text style={{color:'#00D33A'}}>2. Menjaga kesehatan mata</Text>
                    <Text style={{color:'#00D33A'}}>3. Menyehatkan saluran pencernaan</Text>
                    <Text style={{color:'#00D33A'}}>4. Mengontrol tekanan darah</Text>
                    <Text style={{color:'#00D33A'}}>5. Meningkatkan kesehatan tulang</Text>
                  </View>
                      
                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card>

            <View style={{paddingBottom:10}}/>

            <Card style={{borderRadius:10}}>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}}>
              <Grid style={{height:150}}>
              <Col style={{width:'30%'}}>
                  <Image source={require('../images/bayam.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Bayam merupakan tumbuhan</Text>
                    <Text style={{color:'#00D33A'}}>yang biasa ditanam untuk</Text>
                    <Text style={{color:'#00D33A'}}>dikonsumsi daunnya sebagai</Text>
                    <Text style={{color:'#00D33A'}}>sayuran hijau. Tumbuhan ini</Text>
                    <Text style={{color:'#00D33A'}}>dikenal sebagai sayuran</Text>
                    <Text style={{color:'#00D33A'}}>sumber zat besi yang</Text>
                    <Text style={{color:'#00D33A'}}>penting bagi tubuh.</Text>
                  </View>
                        
                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card>

            <View style={{paddingBottom:10}}/>

            <Card style={{borderRadius:10}}>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}}>
              <Grid style={{height:200}}>
              <Col style={{width:'30%'}}>
                  <Image source={require('../images/images11.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat labu siam:</Text>
                    <Text style={{color:'#00D33A'}}>1. Berat badan menjadi lebih turun</Text>
                    <Text style={{color:'#00D33A'}}>2. Untuk mecegah sembelit</Text>
                    <Text style={{color:'#00D33A'}}>3. Bagus untuk ginjal</Text>
                    <Text style={{color:'#00D33A'}}>4. Mencegah terjadinya penuaan dini</Text>
                    <Text style={{color:'#00D33A'}}>5. Menurunkan kolestrol</Text>
                  </View>
                        
                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card>

            <View style={{paddingBottom:10}}/>

            <Card style={{borderRadius:10}}>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}}>
              <Grid style={{height:200}}>
              <Col style={{width:'30%'}}>
                  <Image source={require('../images/images12.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat terong ungu :</Text>
                    <Text style={{color:'#00D33A'}}>1. Menjaga kesehatan jantung</Text>
                    <Text style={{color:'#00D33A'}}>2. Menurunkan kadar kolestrol</Text>
                    <Text style={{color:'#00D33A'}}>3. Meningkatkan fungsi otak</Text>
                    <Text style={{color:'#00D33A'}}>4. Mencegah kanker</Text>
                    <Text style={{color:'#00D33A'}}>5. Membuat kulit lembut dan bercahaya</Text>
                  </View>
                        
                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card>

             <View style={{paddingBottom:10}}/>

             <Card style={{borderRadius:10}}>
              <CardItem cardBody style={{borderRadius:10,backgroundColor:'#C6FFBD'}}>
              <Grid style={{height:200}}>
              <Col style={{width:'30%'}}>
                  <Image source={require('../images/images9.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Kandungan gizi:</Text>
                    <Text style={{color:'#00D33A'}}>Zat besi, protein, vitamin c,</Text>
                    <Text style={{color:'#00D33A'}}>a & b1, lemak, karbohidrat,</Text>
                    <Text style={{color:'#00D33A'}}>kalsium. Manfaat : Mengatasi</Text>
                    <Text style={{color:'#00D33A'}}>insomnia, mencegah sariawan,</Text>
                    <Text style={{color:'#00D33A'}}>menurunkan kolestrol,</Text>
                    <Text style={{color:'#00D33A'}}>mengobati penyakit kuning</Text>
                  </View>

                </Body>
              </Col>
              </Grid>
              </CardItem>
            </Card>

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