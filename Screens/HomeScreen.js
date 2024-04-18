import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    
    const navigation = useNavigation();

    return(
        <View>
            <Text
            style= {{ 
                fontSize:30, 
                textAlign: 'center', 
                marginTop: '20%'}}
            >¡Bienvenido!</Text>

            <Text
            style= {{ 
                fontSize:20, 
                textAlign: 'center',  
                marginTop: '5%'}}
            >En este lugar amamos a los osos {'\n'}
            Sobretodo a los osos polares.
            </Text>
            <Text
            style= {{ 
                fontSize:15, 
                textAlign: 'center',  
                marginTop: '10%'}}
            >Presiona el botón para saber más sobre él</Text>

        <TouchableOpacity
            onPress={() => navigation.navigate("Osos")}
            style={{
                backgroundColor:'#6CA6CD',
                padding: 10,
                marginTop:'5%',
                width: '50%',
                alignSelf:'center',

            }}
        >
            <Text
                style={{
                    fontSize:15,
                    textAlign: 'center',
                    color: 'white'
                }}
            > Ver Osos Polares </Text>
        </TouchableOpacity>
    </View>
    )
}

export default HomeScreen