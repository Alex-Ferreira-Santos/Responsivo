import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TouchableNativeFeedback} from 'react-native'
import styles from '../styles/produto'

class Masculino extends Component {
    render(){
        const masculino = require('../img/masculino1.jpg')
        const masculino2 = require('../img/masculino2.jpg')
        const masculino3 = require('../img/masculino3.jpg')
        const masculino4 = require('../img/masculino4.jpg')
        return (
            <View>

                <ScrollView contentContainerStyle={styles.moda}> 
                    <TouchableNativeFeedback onPress={()=>{
                            this.props.image(masculino,'Roupa 1','R$40,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 1, preço de 40 reais'>
                        <View style={styles.produto}>
                                <Image source={masculino} style={styles.roupa}/>
                                <Text>Roupa 1</Text>
                                <Text>R$40,00</Text>     
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                            this.props.image(masculino2,'Roupa 2','R$60,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 2, preço de 60 reais'>
                        <View style={styles.produto}>     
                            <Image source={masculino2} style={styles.roupa}/>
                            <Text>Roupa 2</Text>
                            <Text>R$60,00</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                            this.props.image(masculino3,'Roupa 3','R$80,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 3, preço de 80 reais'>
                        <View style={styles.produto}>     
                            <Image source={masculino3} style={styles.roupa}/>
                            <Text>Roupa 3</Text>
                            <Text>R$80,00</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                            this.props.image(masculino4,'Roupa 2','R$140,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 2, preço de 140 reais'>
                        <View style={styles.produto}>    
                            <Image source={masculino4} style={styles.roupa}/>
                            <Text>Roupa 4</Text>
                            <Text>R$140,00</Text>
                        </View>
                    </TouchableNativeFeedback>
                </ScrollView>
            </View>
        )
    }
}

export default Masculino;