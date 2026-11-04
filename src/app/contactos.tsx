import { FontAwesome } from '@expo/vector-icons';
import { Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const contactos = () => {
  return (
    <ScrollView style={{ backgroundColor: '#FFF7E8' }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Contactos</Text>
        <Image source={require('../../assets/images/cont.jpg')} style={styles.imagen} />

        <View style={styles.formulario}>
          <TextInput placeholder="Escribe tu nombre" placeholderTextColor="#9CA3AF" style={styles.input} />
          <TextInput placeholder="Escribe tu correo" placeholderTextColor="#9CA3AF" style={styles.input} />
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.textoBoton}>Enviar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.redes}>
          <FontAwesome style={styles.icono} name="facebook" size={24} color="#F59E0B"
            onPress={() => Linking.openURL('https://www.google.com')} />
          <FontAwesome style={styles.icono} name="youtube" size={24} color="#F59E0B"
            onPress={() => Linking.openURL('https://www.google.com')} />
          <FontAwesome style={styles.icono} name="instagram" size={24} color="#F59E0B"
            onPress={() => Linking.openURL('https://www.google.com')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default contactos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F766E',
    marginBottom: 10,
  },
  imagen: {
    width: '100%',
    height: 190,
    borderRadius: 24,
    marginTop: 10,
  },
  formulario: {
    backgroundColor: '#0F766E',
    padding: 20,
    borderRadius: 24,
    marginVertical: 25,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#F59E0B',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  textoBoton: {
    textAlign: 'center',
    color: '#134E4A',
    fontWeight: 'bold',
  },
  redes: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  icono: {
    backgroundColor: '#134E4A',
    margin: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    overflow: 'hidden',
  },
});