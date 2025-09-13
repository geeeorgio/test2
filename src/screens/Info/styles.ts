import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  text: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 600,
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btns: {
    flexDirection: 'row',
    gap: 9,
    paddingVertical: 34,
  },
  share: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 16,
    paddingHorizontal: 33,
  },
  rate: {
    paddingVertical: 16,
    paddingHorizontal: 33,
  },
  btnText: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: 600,
  },
});
