import { Text, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import Colors from '../../constants/colors';

function Title({children}) {
  const { height } = useWindowDimensions();
  const marginTopDistance = height < 400 ? 10 : 80;
  const fontDefined = marginTopDistance == 10? 16 : 28;
  return <Text style={[styles.title, {marginTop: marginTopDistance, fontSize: fontDefined}]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 16,
    maxWidth: '80%',
    width: 300,
    marginBottom: 20,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
    backgroundColor: Colors.primary800,
    textTransform: 'uppercase',
    letterSpacing: 2,
  }
});