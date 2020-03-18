// eslint-disable-next-line no-unused-vars
import * as REACT from 'react';
import useLocalStorage from 'client/hooks/useLocalStorage';
import { act } from 'react-dom/test-utils';
import setUpHook from 'client/hookHelper';

const defaultHook = setUpHook(useLocalStorage);

const localStorageMock = (() => {
  const store = {};
  return {
    getItem: key => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('[hook] useLocalStorage', () => {
  it('should get initial value when local storage does not have any data for the key', () => {
    act(() => {
      const [storedValue, setValue] = defaultHook('item', { value: 'value' })();
      expect(storedValue.value).toEqual('value');

      setValue({ value: 'newValue' });

      const [newStoredValue] = defaultHook('item', [])();
      expect(newStoredValue.value).toEqual('newValue');
    });
  });

  it('should set a new value for stored value', () => {
    act(() => {
      const [, setValue] = defaultHook('item', { value: 'value' })();
      setValue({ value: 'newValue' });

      const [newStoredValue] = defaultHook('item', [])();
      expect(newStoredValue.value).toEqual('newValue');
    });
  });
});
