import { Dispatch, DispatchWithoutAction, SetStateAction, createContext } from 'react';

interface LotContext {
  LotNumberContext: {
    lotNumber: string | undefined;
    setLotNumber: Dispatch<SetStateAction<string | undefined>>;
  };
}

export const LotContext = createContext<LotContext>({} as LotContext);
