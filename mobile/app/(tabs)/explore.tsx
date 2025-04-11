import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/nubank.webp')}
        style={styles.reactLogo}
      />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">PIX</ThemedText> 
      </ThemedView>
      <ThemedText>PARA QUEM DESEJA REALIZAR?</ThemedText>
      <Collapsible title="Samara">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          41-987683324 <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="maria">
        <ThemedText>
          41-985456213{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
      </Collapsible>
      <Collapsible title="Gabriela"><ThemedText>
        41-998765545 <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText></ThemedText>
          
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link"></ThemedText>
        </ExternalLink></Collapsible>
      <Collapsible title="Rafaela">
        <ThemedText>
 <ThemedText type="defaultSemiBold">41-997030268</ThemedText> {' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Graziely">
        <ThemedText>
          41-998749989{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Bianca">
        <ThemedText>
          41-987675546{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
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
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
