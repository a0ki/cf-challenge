import * as Font from 'expo-font';

export default useFonts = async () => {
    await Font.loadAsync({
        'SF-Pro-Text-Bold': require('../assets/fonts/SF-Pro-Text-Bold.otf'),
    });
    await Font.loadAsync({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    });
}
