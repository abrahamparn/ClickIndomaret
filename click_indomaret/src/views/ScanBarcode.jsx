import React from "react";
import bayar from "../assets/illustration/bayar.png";
import indomaret from "../assets/indomaret.png";
import { Link } from "react-router-dom";

export default function ScanBarcode() {
  return (
    <div className="flex flex-col mx-0">
      <div className="w-full justify-center items-center flex mt-5">
        <img src={indomaret} className="lg:w-[350px] idm:w-[400px]" />
      </div>
      <div className="flex flex-col items-center mt-10">
        <img src={bayar} className="w-2/4" />

        <p className="mt-8 text-5xl font-bold text-center">
          Scan barcode untuk melakukan pembayaran
        </p>
        <div className="pt-4 max-h-[800px] min-h-[800px] overflow-y-auto "></div>
      </div>
      <div className="border-t-2 flex flex-row p-10 justify-between items-center">
        <div className="flex flex-col gap-2">
          <Link to="/MenuSearch">
            <button className="bg-gray-300 ps-10 pe-10 pt-1 pb-1 rounded-[4px]">
              Kembali
            </button>
          </Link>
          <button className="bg-Red_IDM text-white ps-10 pe-10 pt-3 pb-3 rounded-[4px] text-2xl">
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
}
