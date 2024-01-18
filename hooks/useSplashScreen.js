import { useState, useEffect } from 'react';
import useFonts from './useFonts';
import * as SplashScreen from 'expo-splash-screen';

export default function useSplashScreen() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      SplashScreen.preventAutoHideAsync();

      await useFonts();
      setIsReady(true);

      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  return isReady;
}