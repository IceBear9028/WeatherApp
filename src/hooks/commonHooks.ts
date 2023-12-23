import {useRecoilState} from 'recoil';
import {isStartAtom} from '~/recoil/atom/commonAtom.ts';
import {MAIN_PATH, START_PATH} from '@screens/screenPath.ts';

export function useInitialStartAppPath() {
  const [isStart, setStart] = useRecoilState(isStartAtom);
  const startPath = isStart ? MAIN_PATH : START_PATH;
  function startApp() {
    setStart(() => true);
  }

  return {startPath, startApp};
}
