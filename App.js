
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';

export default function App() {
  const [useNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)
  function pickedNumberHandler(pickedNumber) {
    setGameIsOver(false)
    setUserNumber(pickedNumber)
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if (useNumber) {
    screen = <GameScreen useNumber={useNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && useNumber) {
    screen = <GameOverScreen
      userNumber={useNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGameHandler} />
  }


  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgrounImage}
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
    flex: 1
  },
  backgrounImage: {
    opacity: 0.15
  }
});
