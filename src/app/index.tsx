import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const index = () => {
  return (
    <ScrollView
      style={{ backgroundColor: "#FFF7E8" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Sonic</Text>
        <Text style={styles.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at
          sapiente, velit laudantium cupiditate ea aspernatur labore vitae hic
          autem minus, quas voluptas aliquam.
        </Text>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/logo.jpg")}
            style={styles.imagen}
          />
          <TouchableOpacity
            style={styles.boton}
            onPress={() => router.push("/contactos")}
          >
            <Text style={styles.textoBoton}>Click Aquí</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde
          possimus aut ratione quod. Perferendis ducimus est soluta placeat
          veritatis at nobis excepturi exercitationem consequatur in vero, ea
          enim ab. Alias distinctio consequatur ut vel temporibus magni optio
          magnam fugit impedit commodi atque repellat quisquam numquam nobis,
          eaque illum in maiores! Ipsa quam deleniti quia a, nihil molestiae
          explicabo laudantium.
        </Text>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F766E",
    marginBottom: 10,
  },
  parrafo: {
    fontSize: 14,
    lineHeight: 30,
    color: "#1F2937",
  },
  imagen: {
    width: 285,
    height: 285,
    borderRadius: 24,
    marginTop: 15,
  },
  boton: {
    backgroundColor: "#F59E0B",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  textoBoton: {
    textAlign: "center",
    color: "#134E4A",
    fontWeight: "bold",
  },
});
