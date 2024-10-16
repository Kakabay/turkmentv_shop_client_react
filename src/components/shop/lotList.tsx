import Link from 'next/link';
import React from 'react';

const LotList = () => {
  return (
    <div className="flex flex-col items-center gap-[40px] w-full">
      <h1 className="text-[60px] leading-[100%] text-textBlack font-bold text-center max-w-[900px] w-full">
        Username
      </h1>

      <div className="flex flex-col rounded-[25px] overflow-hidden max-w-[500px] w-full">
        <div className="bg-fillTableHead flex p-5">
          <span className="text-base text-textBlack font-semibold block max-w-[270px] w-full">
            Лот №
          </span>
          <span className="text-base text-textBlack font-semibold block max-w-[166px] w-full">
            Код
          </span>
        </div>
        <div className="flex flex-col w-full">
          <Link href={`/lot/2342424`} className="flex p-5 w-full bg-fillTableRow">
            <span className="text-base text-textBlack font-semibold block max-w-[270px] w-full">
              Лот №123456789
            </span>
            <span className="text-base text-textBlack font-semibold block max-w-[166px] w-full">
              1234
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z"
                fill="#7A7ACC"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LotList;
