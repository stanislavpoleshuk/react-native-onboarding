import { Platform, StyleSheet } from 'react-native';
import Proportions from '../../utils/proportions';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'green',
    zIndex: 999,
    ...Platform.select({
      android: {
        top: -25,
      },
    }),
    width: Proportions.slideSize.width,
  },
  innerWrapper: { backgroundColor: 'green' },
});

export default styles;
