import { PropsWithChildren, useMemo, useState } from 'react';
import { LotContext } from '../context/LotContext';

const LotProvider = ({ children }: PropsWithChildren) => {
  const [lotNumber, setLotNumber] = useState<string>();
  const LotNumberContext = useMemo(() => ({ lotNumber, setLotNumber }), [lotNumber, setLotNumber]);

  return <LotContext.Provider value={{ LotNumberContext }}>{children}</LotContext.Provider>;
};

export default LotProvider;
