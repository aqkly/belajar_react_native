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
            <Title style={{color:'#000000'}}>Buah</Title>
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
              <Grid style={{height:150}}>
              <Col style={{width:'30%'}}>
                  <Image source={require('../images/g.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Tingginya antioksidan pada</Text>
                    <Text style={{color:'#00D33A'}}>stroberi beguna untuk menc-</Text>
                    <Text style={{color:'#00D33A'}}>egah peradangan, kanker, dan</Text>
                    <Text style={{color:'#00D33A'}}>masalah jantung. Buah ini</Text>
                    <Text style={{color:'#00D33A'}}>mengandung vitamin C dan K, </Text>
                    <Text style={{color:'#00D33A'}}>erat, folat, magnesium,</Text>
                    <Text style={{color:'#00D33A'}}>dan kalium.</Text>
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
                  <Image source={require('../images/p.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat Pisang:</Text>
                    <Text style={{color:'#00D33A'}}>1. Menjaga kesehatan jantung</Text>
                    <Text style={{color:'#00D33A'}}>2. Membantu saluran pencernaan</Text>
                    <Text style={{color:'#00D33A'}}>3. Menurunkan resiko kanker</Text>
                    <Text style={{color:'#00D33A'}}>dan gangguan ginjal</Text>
                    <Text style={{color:'#00D33A'}}>4. Menjaga kesehatan mata</Text>
                    <Text style={{color:'#00D33A'}}>5. Menjaga kesehatan kulit</Text>
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
                  <Image source={require('../images/e.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat anggur:</Text>
                    <Text style={{color:'#00D33A'}}>1. Membuat tulang kuat</Text>
                    <Text style={{color:'#00D33A'}}>2. Mencegah penyakit jantung,</Text>
                    <Text style={{color:'#00D33A'}}>diabetes & kanker</Text>
                    <Text style={{color:'#00D33A'}}>3. Meningkatkan daya ingat</Text>
                    <Text style={{color:'#00D33A'}}>4. Meningkatkan kesehatan mata</Text>
                    <Text style={{color:'#00D33A'}}>5. Mencegah penyakit usus</Text>
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
                  <Image source={require('../images/i.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat Kiwi:</Text>
                    <Text style={{color:'#00D33A'}}>1. Membantu tidur nyenyak</Text>
                    <Text style={{color:'#00D33A'}}>2. Sumber serat yang baik</Text>
                    <Text style={{color:'#00D33A'}}>3. Melancarkan saluran pencernaan</Text>
                    <Text style={{color:'#00D33A'}}>4. Mempercantik kulit</Text>
                    <Text style={{color:'#00D33A'}}> 5, Bermanfaat untuk</Text>
                    <Text style={{color:'#00D33A'}}>wanita hamil</Text>
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
                  <Image source={require('../images/m.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat Pepaya:</Text>
                    <Text style={{color:'#00D33A'}}>1. Menurunkan kolestrol</Text>
                    <Text style={{color:'#00D33A'}}>2. Menurunkan berat badan</Text>
                    <Text style={{color:'#00D33A'}}>3. Baik untuk penderita diabetes</Text>
                    <Text style={{color:'#00D33A'}}>4. Mencegah rahang sendi</Text>
                    <Text style={{color:'#00D33A'}}>5. Meredakan sakit saat haid </Text>
                    <Text style={{color:'#00D33A'}}>6. Membantu sistem pencernaan</Text>
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
                  <Image source={require('../images/l.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat Mangga:</Text>
                    <Text style={{color:'#00D33A'}}>1. Menurunkan kolestrol dan menjaga kesehatan jantung</Text>
                    <Text style={{color:'#00D33A'}}>2. Mencegah kanker</Text>
                    <Text style={{color:'#00D33A'}}>3, Mengatasi obesitas</Text>
                    <Text style={{color:'#00D33A'}}>4. Menyembuhkan anemia</Text>
                    <Text style={{color:'#00D33A'}}>5. Mengatasi sembelit</Text>
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
                  <Image source={require('../images/j.jpeg')} style={{height:400, width: null, flex:1, borderRadius:10}}/>
              </Col>
              <Col style={{paddingLeft:20}}>
                <Body>
                  <View>
                    <Text style={{color:'#00D33A'}}>Manfaat Manggis:</Text>
                    <Text style={{color:'#00D33A'}}>1. Mencegah jantung dan kanker</Text>
                    <Text style={{color:'#00D33A'}}>2. Menurunkan diabetes</Text>
                    <Text style={{color:'#00D33A'}}>3. Menyembuhkan diare</Text>
                    <Text style={{color:'#00D33A'}}>4. Senjata anti tua</Text>
                    <Text style={{color:'#00D33A'}}>5. Melawan radang</Text>
                    <Text style={{color:'#00D33A'}}>6. Mengatasi sakit haid</Text>
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