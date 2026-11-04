import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © 2026 Ian Matias Romero Rivera. Todos los derechos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});