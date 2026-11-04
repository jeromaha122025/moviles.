import { FontAwesome } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native';
import Footer from '../components/footer';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Inicio',
            title: 'Inicio',
            drawerIcon: ({ color }) => (<FontAwesome name='user' size={24} color={'red'} />),
          }}
        />
        <Drawer.Screen
          name="nosotros"
          options={{
            drawerLabel: 'Nosotros',
            title: 'Nosotros',
            drawerIcon: ({ color }) => (<FontAwesome name='envelope' size={24} color={'gray'} />),
          }}
        />
        <Drawer.Screen
          name="contactos"
          options={{
            drawerLabel: 'Contactos',
            title: 'Contactos',
            drawerIcon: ({ color }) => (<FontAwesome name='comment' size={24} color={'green'} />),
          }}
        />
      </Drawer>
      <Footer />
    </View>
  );
}