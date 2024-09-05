import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({children}) {
  const { width, height } = useWindowDimensions();

  const paddingDefined = width < 380 ? 12 : 34;
  const marginDefined = width < 380 ? 12 : 24;
  const marginHeightDefined = height < 400 ? 5 : 80
  const fontDefined = height < 400 ? 24 : 48;

  return (
    <View style={[styles.container, {
        padding: paddingDefined, margin: marginDefined, marginTop: marginHeightDefined, marginBottom: marginHeightDefined
      }]}>
      <Text style={[styles.numberText, {fontSize: fontDefined}]}>
        {children}
      </Text>
    </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    backgroundColor: Colors.primary500,
    borderRadius: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontWeight: 'bold',
  },
});