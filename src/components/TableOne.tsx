import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/useRedux';

import BrandFive from '../images/brand/brand-05.svg';

const TableOne = () => {
  const products = useAppSelector((state) => state?.productData?.data);

  return (
    <div className="w-full rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex w-full items-center justify-between">
        <h4 className=" text-xl font-semibold text-black dark:text-white">
          Products
        </h4>
        <Link
          to="/uploadProduct"
          className="rounded-[8px] bg-[#24df2d] px-[10px] py-[5px] text-[#fff]  transition-all duration-300 ease-in-out hover:scale-[1.15] hover:opacity-70"
        >
          Add New
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Title
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Price
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Stock
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Brand
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {products?.length > 0 ? (
          products?.map((product, index) => (
            <div className="grid grid-cols-3 sm:grid-cols-5" key={index}>
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img
                    src={product?.image || BrandFive}
                    alt="Brand"
                    className="h-[50px] w-[50px]"
                  />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {product?.name || '-'}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">
                  {product?.price || '-'}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{product?.countInStock || 0}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">
                  {product?.brand || '-'}
                </p>
              </div>

              <div className="hidden items-center justify-center gap-x-[15px] p-2.5 sm:flex xl:p-5">
                <button className="rounded-[8px] bg-[#e91717] px-[10px] py-[5px] text-[#fff]  transition-all duration-300 ease-in-out hover:scale-[1.15] hover:opacity-70">
                  Delete
                </button>
                <button className="rounded-[8px] bg-[#e91717] px-[10px] py-[5px] text-[#fff]  transition-all duration-300 ease-in-out hover:scale-[1.15] hover:opacity-70">
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-center text-[20px] font-[400] text-[#000]">
              No items found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableOne;
