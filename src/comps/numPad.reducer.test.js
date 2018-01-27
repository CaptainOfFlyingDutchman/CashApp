/* global describe it beforeEach expect */

import numPadReducer from './numPad.reducer';
import { NUMPAD_ADD_VALUE, NUMPAD_REMOVE_VALUE } from './numPad.actions';

describe('Testing numPad.reducer', () => {
  describe(`Returns correct values on empty state for ${NUMPAD_ADD_VALUE}`, () => {
    let initialState;
    beforeEach(() => {
      initialState = { characteristic: '', mantissa: '' };
    });

    it('returns correct characteristic', () => {
      const newState = numPadReducer(initialState, {
        type: NUMPAD_ADD_VALUE,
        value: 2,
        isCharacteristic: true
      });

      expect(newState).toEqual({ characteristic: '2', mantissa: '' });
    });

    it('returns correct mantissa', () => {
      const newState = numPadReducer(initialState, {
        type: NUMPAD_ADD_VALUE,
        value: 2
      });

      expect(newState).toEqual({ characteristic: '', mantissa: '2' });
    });
  });

  describe(`Returns correct values on non empty state for ${NUMPAD_ADD_VALUE}`, () => {
    let initialState;
    beforeEach(() => {
      initialState = { characteristic: '23', mantissa: '1' };
    });

    it('returns correct characteristic', () => {
      const newState = numPadReducer(initialState, {
        type: NUMPAD_ADD_VALUE,
        value: 2,
        isCharacteristic: true
      });

      expect(newState).toEqual({ characteristic: '232', mantissa: '1' });
    });

    it('returns correct mantissa', () => {
      const newState = numPadReducer(initialState, {
        type: NUMPAD_ADD_VALUE,
        value: 2
      });

      expect(newState).toEqual({ characteristic: '23', mantissa: '12' });
    });
  });

  describe(`Returns correct values on empty state for ${NUMPAD_REMOVE_VALUE}`, () => {
    let initialState;
    beforeEach(() => {
      initialState = { characteristic: '', mantissa: '' };
    });

    it('returns correct characteristic', () => {
      const newState = numPadReducer(initialState, {
        type: NUMPAD_REMOVE_VALUE,
        isCharacteristic: true
      });

      expect(newState).toEqual({ characteristic: '', mantissa: '' });
    });

    it('returns correct mantissa', () => {
      const newState = numPadReducer(initialState, {
        type: NUMPAD_REMOVE_VALUE,
      });

      expect(newState).toEqual({ characteristic: '', mantissa: '' });
    });
  });

  describe(`Returns correct values on non empty state for ${NUMPAD_REMOVE_VALUE}`, () => {
    let initialState;
    beforeEach(() => {
      initialState = { characteristic: '23', mantissa: '1' };
    });

    it('returns correct characteristic', () => {
      const newState = numPadReducer(initialState, {
        type: NUMPAD_REMOVE_VALUE,
        isCharacteristic: true
      });

      expect(newState).toEqual({ characteristic: '2', mantissa: '1' });
    });

    it('returns correct mantissa', () => {
      const newState = numPadReducer(initialState, {
        type: NUMPAD_REMOVE_VALUE
      });

      expect(newState).toEqual({ characteristic: '23', mantissa: '' });
    });
  });

  describe('Returns correct values on non empty state for random calls', () => {
    it('returns correct characteristic', () => {
      const initialState = { characteristic: '123', mantissa: '23' };
      let newState = numPadReducer(initialState, { type: NUMPAD_REMOVE_VALUE, isCharacteristic: true });
      expect(newState).toEqual({ characteristic: '12', mantissa: '23' });

      newState = numPadReducer(newState, { type: NUMPAD_REMOVE_VALUE });
      expect(newState).toEqual({ characteristic: '12', mantissa: '2' });

      newState = numPadReducer(newState, {
        type: NUMPAD_ADD_VALUE,
        value: 2,
        isCharacteristic: true
      });
      expect(newState).toEqual({ characteristic: '122', mantissa: '2' });

      newState = numPadReducer(newState, {
        type: NUMPAD_ADD_VALUE,
        value: 1
      });
      expect(newState).toEqual({ characteristic: '122', mantissa: '21' });
    });
  });
});
