import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image} 
          source={require('../assets/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to 
        guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: deviceWidth < 380 ? 12 : 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: deviceWidth * 0.7,
    height: deviceWidth * 0.7,
    borderRadius: deviceWidth * 0.7 / 2,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: deviceWidth < 380 ? 12 : 24,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: deviceWidth < 380 ? 16 : 20,
    textAlign: 'center',
    marginBottom: deviceWidth < 380 ? 12 : 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});