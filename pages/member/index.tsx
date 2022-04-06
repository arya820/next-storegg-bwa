import jwtDecode from 'jwt-decode';
import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';
import { GetServerSideProps, jwtPayloadTypes, UserTypes } from '../../services/data-types';

/* eslint-disable linebreak-style */
export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}

export async function getServerSideProps({ req }: GetServerSideProps) {
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
  const payload: jwtPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
