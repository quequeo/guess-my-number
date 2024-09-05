import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

import Colors from '../../constants/colors';

function PrimaryButton({ onPress, children }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressed
        ]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    borderColor: '#78293c',
    borderWidth: 1,
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.primary500,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.50,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  buttonText: {
    color: Colors.accent500,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});