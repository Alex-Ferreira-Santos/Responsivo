import React,{Component} from 'react';
import {View,Text,ScrollView,Image} from 'react-native'
import styles from '../styles/produto'

class Novidades extends Component {
    render() {
        const feminino = require('../img/feminino1.jpg')
        const feminino2 = require('../img/feminino2.jpg')
        const masculino3 = require('../img/masculino3.jpg')
        const masculino4 = require('../img/masculino4.jpg')
        return (
            <View>
                <ScrollView contentContainerStyle={styles.moda}>
                <View style={styles.produto}>
                    <Text style={styles.novo}>Novo!</Text>
                    <Image source={feminino} style={styles.roupa}/>
                    <Text>Roupa 1</Text>
                    <Text>R$40,00</Text>
                </View>

                <View style={styles.produto}>
                    <Text style={styles.novo}>Novo!</Text>
                    <Image source={feminino2} style={styles.roupa}/>
                    <Text>Roupa 2</Text>
                    <Text>R$80,00</Text>
                </View>

                <View style={styles.produto}>
                    <Text style={styles.novo}>Novo!</Text>
                    <Image source={masculino3} style={styles.roupa}/>
                    <Text>Roupa 3</Text>
                    <Text>R$120,00</Text>
                </View>

                <View style={styles.produto}>
                    <Text style={styles.novo}>Novo!</Text>
                    <Image source={masculino4} style={styles.roupa}/>
                    <Text>Roupa 4</Text>
                    <Text>R$140,00</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}

export default Novidades