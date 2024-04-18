import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const SettingsScreen = () => {
    return(
        <View>
             <Image
                source={{ uri: 'https://i.pinimg.com/564x/e7/ee/19/e7ee194f59903650780e76ead884b7db.jpg' }}
                style={styles.image}
            />
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/c8/bb/82/c8bb8239305730434b299341c2950344.jpg' }}
                style={styles.image}
            />
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/35/1c/ac/351cacde4f3571361f7606db5f4a1c46.jpg' }}
                style={styles.image}
            />
            <Image
                source={{ uri: 'https://i.pinimg.com/736x/d8/d1/c1/d8d1c155200495b21b14c79e21ee3eeb.jpg' }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        alignItems:'center',
        width: '90%',
        height: 150,
        borderRadius: 50,
        margin:15,
    },
});
export default SettingsScreen