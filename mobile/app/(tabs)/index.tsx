import { Image, StyleSheet, Platform, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/nubank.webp')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">olá isabella</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo</ThemedText>
        <ThemedText>
          99.999.00 <ThemedText type="defaultSemiBold"></ThemedText>  
        {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}

        </ThemedText><Pressable
          onPress={() => router.push('/explore')}
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#fdfffe' : '#fdfffe', // Escurece quando pressionado
            padding: 6,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }], // Efeito de "afundar"
          })}
        >
          <ThemedText style={{ color: '', fontWeight: 'bold' }}>PIX</ThemedText>
        </Pressable>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">cartão de crédito</ThemedText> 
        <ThemedText>
          
        10.000.00</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">fatura atual</ThemedText>
        <ThemedText>
          3.000.00{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
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
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
