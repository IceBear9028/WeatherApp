import {atom} from 'recoil';

export const isStartAtom = atom<boolean>({
  key: 'isStartAtom',
  default: false,
});
