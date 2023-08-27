// import CardFour from '../../components/CardFour.tsx';
// import CardOne from '../../components/CardOne.tsx';
// import CardThree from '../../components/CardThree.tsx';
// import CardTwo from '../../components/CardTwo.tsx';
// import ChartOne from '../../components/ChartOne.tsx';
// import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';
// import MapOne from '../../components/MapOne.tsx';
import { useEffect } from 'react';
import TableOne from '../../components/TableOne.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux.ts';
import { fetchProductData } from '../../actionandReducers/productReducer/action.ts';
import Loader from '../../common/Loader/index.tsx';

const ECommerce = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductData({}));
  }, []);

  const isLoading = useAppSelector((state) => state.productData?.isLoading);

  return (
    <>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8 w-full">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}

      <div className="w-full">
        {isLoading ? <Loader isSmall /> : <TableOne />}
      </div>
    </>
  );
};

export default ECommerce;
