import React, { Component } from "react";
import {Router,Scene} from 'react-native-router-flux';
import Mulai from './page/Mulai';
import Home from './page/Home';
import ArtikelSatu from './page/ArtikelSatu';
import Buah from './page/Buah';
import Sayuran from './page/Sayuran';
import ArtikelDua from './page/ArtikelDua';
import Profil from './page/Profil';

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="mulai" component={Mulai} initial={true}/>
                    <Scene key="home" component={Home} />
                    <Scene key="artikelSatu" component={ArtikelSatu} />
                    <Scene key="buah" component={Buah} />
                    <Scene key="sayuran" component={Sayuran} />
                    <Scene key="artikelDua" component={ArtikelDua} />
                    <Scene key="profil" component={Profil} />
                </Scene>
            </Router>
        );
    }
}