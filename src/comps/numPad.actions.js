export const NUMPAD_ADD_VALUE = 'NUMPAD_ADD_VALUE';
export const NUMPAD_REMOVE_VALUE = 'NUMPAD_REMOVE_VALUE';

export const addValue = (value, isCharacteristic = false) => ({
  type: NUMPAD_ADD_VALUE,
  value,
  isCharacteristic
});

export const removeValue = (isCharacteristic = false) => ({
  type: NUMPAD_REMOVE_VALUE,
  isCharacteristic
});
