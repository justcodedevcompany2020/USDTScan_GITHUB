import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const AviableEnergy = () => {
  const colors = ['#f6da53', '#e0a61f'];
  return (
    <View >
      <View style={styals.LinearGradientWrapper}>
        <LinearGradient
          style={styals.LinearGradient}
          start={{x: 0, y: 0.75}}
          end={{x: 1, y: 0.25}}
          colors={colors}>
          <Text style={styals.LinearGradientText}>95% of 100%</Text>
        </LinearGradient>
        <Text>Available Energy </Text>
      </View>
      <View style={styals.loading}>
        <View
       
          style={{
            width: '95%',
            backgroundColor: '#08c18d',
          }}>
          <Text style={styals.progresText}>95.00%</Text>
        </View>
      </View>
      <View>
        <Text style={styals.textAviable}>
          Available daily energy for each USDT wallet is 1200 points. 1
          transaction consumes 10 to 25 Energy Points.{' '}
        </Text>
      </View>
    </View>
  );
};

const styals = StyleSheet.create({
  LinearGradientWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  LinearGradient: {
    width: 100,
    paddingVertical: 2,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  LinearGradientText: {
    color: 'white',
  },
  loading: {
    width: '100%',
    borderRadius: 10,
    height: 20,
    backgroundColor: '#e9ecef',
    color: 'white',
    overflow: 'hidden',
  },
  progresText: {
    textAlign: 'center',
    color: 'white',
  },
  textAviable: {
    color: '#c3c3c3',
    fontSize: 12,
    marginTop: 10,
  },
});
