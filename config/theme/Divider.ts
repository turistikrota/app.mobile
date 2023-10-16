import { createStyle } from '@gluestack-style/react';
import { StyleSheet } from 'react-native';

export const Divider = createStyle({
  bg: '$borderDark400',
  _dark: {
    bg: '$backgroundLight800',
  },
  variants: {
    orientation: {
      vertical: {
        width: StyleSheet.hairlineWidth,
        height: '$full',
      },
      horizontal: {
        height: StyleSheet.hairlineWidth,
        width: '$full',
      },
    },
  },
  defaultProps: {
    orientation: 'horizontal',
  },
});
