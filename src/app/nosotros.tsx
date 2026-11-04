import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const nosotros = () => {
  return (
    <ScrollView style={{ backgroundColor: '#FFF7E8' }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Nosotros</Text>
        <Text style={styles.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at sapiente, velit laudantium cupiditate ea aspernatur labore vitae hic autem minus, quas voluptas aliquam.
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/images/noso.jpg')} style={styles.imagen} />
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.textoBoton}>Click Aquí</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.parrafo}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, doloribus ducimus. Consequuntur velit odio et, doloremque quia dicta optio enim id minus dolor nostrum similique sint reprehenderit reiciendis placeat. Dolor?
         Dicta necessitatibus nihil molestiae, similique laboriosam nesciunt totam ea fugit hic. Suscipit aspernatur obcaecati mollitia fugit sed, alias voluptas tempora aliquam eligendi accusantium reprehenderit expedita, ipsam non vero consequatur illo.
         Quo error recusandae hic iure, eaque adipisci quisquam consequuntur quidem debitis deleniti, facilis a reiciendis soluta aperiam similique ab nulla ullam, aut nesciunt est. Inventore id sint minima distinctio ab?
        </Text>
      </View>
    </ScrollView>
  );
};

export default nosotros;

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
  parrafo: {
    fontSize: 14,
    lineHeight: 30,
    color: '#1F2937',
  },
  imagen: {
    width: 285,
    height: 190,
    borderRadius: 24,
    marginTop: 15,
  },
  boton: {
    backgroundColor: '#F59E0B',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  textoBoton: {
    textAlign: 'center',
    color: '#134E4A',
    fontWeight: 'bold',
  },
});