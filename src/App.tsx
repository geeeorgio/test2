import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import BulbSvg from './assets/icons/bulb.svg';
import HomeSvg from './assets/icons/home.svg';
import LikeSvg from './assets/icons/like.svg';
import LocationSvg from './assets/icons/location.svg';
import SettingsSvg from './assets/icons/settings.svg';

import LinearGradient from 'react-native-linear-gradient';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <ImageBackground
          source={require('./assets/images/BCKG2.png')}
          resizeMode="cover"
          style={styles.image}
        >
          <Image
            style={styles.logo}
            source={require('./assets/images/LOGO2.png')}
          />

          <LinearGradient
            colors={['#020B65', '#0416CB']}
            style={styles.gradientContainer}
          >
            <View style={styles.iconsWrapper}>
              <HomeSvg
                width={30}
                height={30}
                stroke={'#FFFFFF'}
                strokeWidth={2}
              />
              <BulbSvg
                width={30}
                height={30}
                stroke={'#FFFFFF'}
                strokeWidth={2}
              />
              <SettingsSvg
                width={30}
                height={30}
                stroke={'#FFFFFF'}
                fill={'#FFFFFF'}
              />
              <LikeSvg
                width={30}
                height={30}
                stroke={'#FFFFFF'}
                strokeWidth={2}
              />
              <LocationSvg width={30} height={30} fill={'#FFFFFF'} />
            </View>
          </LinearGradient>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    borderRadius: 44,
    width: 213,
    height: 213,
    marginTop: 96,
    marginBottom: 20,
  },
  gradientContainer: {
    width: '100%',
    borderRadius: 22,
  },
  iconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 25,
    paddingVertical: 45,
    paddingHorizontal: 40,
  },
});

export default App;
