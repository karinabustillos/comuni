import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mapWrapper: {
    width: width * 0.9,
    aspectRatio: 1.7,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#98D2C0',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    marginTop: 10, 
  },
  map: {
    flex: 1,
  },
});