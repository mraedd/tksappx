import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#a1b2c3', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/tkslogo.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedView style={styles.stepContainer}>

          <ThemedText type="title">Teksinn</ThemedText>
          <ThemedText type="subtitle">Aradığın Herşey Teksinn'de.!</ThemedText>
          <ThemedText type="body">
            Teksinn, kullanıcıların aradıkları ürünleri kolayca bulmalarını sağlayan bir platformdur. Kullanıcılar, ürünleri kategorilere göre arayabilir, filtreleyebilir ve sıralayabilirler. Ayrıca, kullanıcılar ürünleri favorilerine ekleyebilir ve daha sonra kolayca erişebilirler.
          </ThemedText>
        </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 120,
    width: 290,
    marginTop:90,
    marginLeft: 60,
    top:0,
    left:0,
  },
});
