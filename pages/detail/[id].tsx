/* eslint-disable linebreak-style */

// import { useRouter } from 'next/router';
// import { useCallback, useEffect, useState } from 'react';
import { useEffect } from 'react';
import TopUpForm from '../../components/organisms/TopUpForm';
import TopUpItem from '../../components/organisms/TopUpItem';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';
import { getDetailVoucher, getFeaturedGame } from '../../services/player';
import { GameItemTypes, NominalsTypes, PaymentTypes } from '../../services/data-types';

interface DetailProps {
  dataItem: {
    voucher: GameItemTypes;
  };
  nominals: {
    voucher: {
      nominals: NominalsTypes;
    }
  };
  payments: {
    payment: PaymentTypes;
  }
}
// jika menggunakan client side
// export default function Detail() {
// jika menggunakan server side
export default function Detail({ dataItem, nominals, payments }: DetailProps | any) {
  useEffect(() => {
    localStorage.setItem('data-item', JSON.stringify(dataItem));
  }, []);
  // CLIENT SIDE
  // const { query, isReady } = useRouter();
  // const [dataItem, setDataItem] = useState({
  //   voucher: {
  //     name: '',
  //     thumbnail: '',
  //     category: {
  //       name: '',
  //     },
  //   },
  // });
  // const [nominals, setNominals] = useState([]);
  // const [payments, setPayments] = useState([]);
  // const getVoucherDetailAPI = useCallback(async (id) => {
  //   const data = await getDetailVoucher(id);
  //   // console.log(data.payment);
  //   setDataItem(data);
  //   localStorage.setItem('data-item', JSON.stringify(data));
  //   setNominals(data.voucher.nominals);
  //   setPayments(data.payment);
  // }, []);
  // useEffect(() => {
  //   if (isReady) {
  //     getVoucherDetailAPI(query.id);
  //   }
  // }, [isReady]);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
            <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={dataItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              {/* Desktop: Game title */}
              <TopUpItem data={dataItem} type="desktop" />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// pemanggilan API secara serverside rendering
export async function getStaticPaths() {
  const data = await getFeaturedGame();
  const paths = data.map((item: GameItemTypes) => ({
    params: {
      id: item._id,
    },
  }));
  // console.log('Paths', paths);
  return {
    paths,
    fallback: false,
  };
  // path yang isinya params akan ke getStaticProps
}
interface GetStaticProps {
  params: {
    id: string;
  }
}
export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailVoucher(id);
  // console.log(data);
  return {
    props: {
      dataItem: data,
      nominals: data.voucher.nominals,
      payments: data.payment,
    },
  };
}
