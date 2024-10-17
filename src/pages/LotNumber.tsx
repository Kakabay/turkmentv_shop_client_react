import { useParams } from 'react-router-dom';
import Container from '../components/shared/container';
import ShopTable from '../components/shop/shopTable';
import LotProvider from '../providers/LotProvider';

const LotNumber = () => {
  let { lot_number } = useParams();

  return (
    <main className="my-[100px]">
      <Container>
        <LotProvider>{<ShopTable params={lot_number} />}</LotProvider>
      </Container>
    </main>
  );
};

export default LotNumber;
