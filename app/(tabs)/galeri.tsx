import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Teksinn Galeri</ThemedText>
      </ThemedView>
      <ThemedText>Galeriye Hoşgeldiniz.</ThemedText>
      <ThemedText>
        Galerimizdeki ürünler, kullanıcıların aradıkları ürünleri kolayca bulmalarını sağlayan bir platformdur. Kullanıcılar, ürünleri kategorilere göre arayabilir, filtreleyebilir ve sıralayabilirler. Ayrıca, kullanıcılar ürünleri favorilerine ekleyebilir ve daha sonra kolayca erişebilirler.
      </ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
