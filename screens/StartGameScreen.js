import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Alert, 
  Text, 
  useWindowDimensions, 
  KeyboardAvoidingView, 
  ScrollView 
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  
  const { height } = useWindowDimensions();

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!', 
        'Number has to be a number between 1 and 99.', 
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onPickedNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  const marginTopDistance = height < 400 ? 10 : 80;

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card style={styles.inputContainer}>
            <Text style={styles.instructionText}>Enter a Number</Text>
            <TextInput 
              style={styles.numberInput} 
              maxLength={2} 
              keyboardType='number-pad' 
              autoCapitalize='none' 
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 36,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    marginBottom: 12,
  },
});