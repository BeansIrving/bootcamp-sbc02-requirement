"use client";
import { useWallet } from "@solana/wallet-adapter-react";

import React from "react";
import useMounted from "@/hooks/useMounted";
import useDapp from "@/hooks/useDapp";

const MainPage = () => {
  const wallet = useWallet();
  const { hasMounted } = useMounted();
  const {
    dataCounter,
    amount,
    readCounter,
    updateCounter,
    initialize,
    handleChangeName,
  } = useDapp();

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#1d1d1e]">
        <div className="flex flex-col justify-center items-center max-w-[1440px] gap-4 grow">
          {wallet.connected ? (
            <>
              <h1 className="text-white text-3xl font-bold uppercase text-center">
                Bootcamp SBC02 Requirement
              </h1>
              <div className="max-w-[300px] w-full flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                  <h1 className="text-white text-center">
                    Counter Data: {dataCounter}
                  </h1>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                  <p className="text-white text-2xl">Amount: </p>
                  <input
                    type="number"
                    placeholder="Input Number Ex: 1"
                    value={amount}
                    onChange={handleChangeName}
                    onBlur={handleChangeName}
                    className="rounded-sm text-md px-2 py-3 text-black bg-[#EBEBEB]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                  <button
                    onClick={() => initialize()}
                    className="w-full text-white bg-[#532da7] rounded-sm py-3 px-2 hover:brightness-150"
                  >
                    Init
                  </button>
                  <button
                    onClick={() => updateCounter(amount)}
                    className="w-full text-white bg-[#532da7] rounded-sm py-3 px-2 hover:brightness-150"
                  >
                    Write
                  </button>
                  <button
                    onClick={() => readCounter()}
                    className="w-full text-white bg-[#532da7] rounded-sm py-3 px-2 hover:brightness-150"
                  >
                    Read
                  </button>
                </div>
              </div>
            </>
          ) : (
            <h1 className="text-white text-3xl font-bold uppercase py-[5rem] px-[2rem] bg-[#532da7]/20 rounded-lg">
              Connect your wallet!
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
