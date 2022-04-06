import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';
import { historyTransactionTypes } from '../../../services/data-types';
import { getTransactionDetail } from '../../../services/member';

interface transactionDetailItem {
  transactionDetail: historyTransactionTypes;
}
export default function TransactionsDetail(transactionDetailProps: transactionDetailItem) {
  const { transactionDetail } = transactionDetailProps;
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}
export interface GetServerSideTrxProps {
  req: {
      cookies: {
          token: string;
      }
  },
  params: {
    idTrx: string;
  }
}
export async function getServerSideProps({ req, params }: GetServerSideTrxProps) {
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const response = await getTransactionDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
