import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>
        Características de los Osos Polares
      </Text>
      <Image
        source={{
          uri: "https://i.pinimg.com/564x/a5/79/8f/a5798f287ef3944dc8e131e390914e0c.jpg",
        }}
        style={styles.image}
      />
      <Text style={[styles.carac]}>
        - Los osos polares son grandes mamíferos carnívoros adaptados a la vida
        en ambientes fríos del Ártico.
      </Text>
      <Text style={[styles.carac]}>
        - Tienen un pelaje grueso y denso que les proporciona aislamiento
        térmico y una capa de grasa bajo la piel para mantener el calor.
      </Text>
      <Text style={[styles.carac]}>
        - Los osos polares son excelentes nadadores y pasan gran parte de su
        vida en el agua, cazando focas y otros animales marinos.
      </Text>
      <Text style={[styles.carac]}>
        - Son depredadores tope en su ecosistema y juegan un papel crucial en el
        equilibrio de la cadena alimentaria del Ártico.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    color:"#6CA6CD"
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom:20,
  },
  carac: {
    fontSize: 16,
    textAlign: 'left',
    marginHorizontal: 20,
    marginBottom: 10,
    },
});

export default StackScreen;
