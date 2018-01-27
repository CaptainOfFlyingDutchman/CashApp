import { NUMPAD_ADD_VALUE, NUMPAD_REMOVE_VALUE } from './numPad.actions';

export default function (state = { characteristic: '', mantissa: '' }, action) {
  switch (action.type) {
    case NUMPAD_ADD_VALUE: {
      if (action.isCharacteristic) {
        return { ...state, characteristic: state.characteristic + action.value };
      }
      return { ...state, mantissa: state.mantissa + action.value };
    }
    case NUMPAD_REMOVE_VALUE: {
      if (action.isCharacteristic) {
        if (state.characteristic.length > 0) {
          return { ...state, characteristic: state.characteristic.substr(0, state.characteristic.length - 1) };
        }
      }

      if (state.mantissa.length > 0) {
        return { ...state, mantissa: state.mantissa.substr(0, state.mantissa.length - 1) };
      }

      return state;
    }
    default:
      return state;
  }
}
