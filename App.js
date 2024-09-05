import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useCallback } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './constants/colors';

export default function App() {
  
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);
  
  const pickedNumberHandler = useCallback((pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
    setGuessRounds(0);
  }, []);

  const gameOverHandler = useCallback((numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }, []);

  const startNewGameHandler = useCallback(() => {
    setUserNumber(null);
    setGuessRounds(0);
    setGameIsOver(true);
  }, []);

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber && !gameIsOver) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
      />
    );
  } else if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/background.png')} 
        style={styles.rootScreen}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
