import React, { useState } from "react";
import { Link } from "react-router-dom";
import B_Frappe from "../assets/banner/B_Frappe.png";
import mister_donut from "../assets/menu/mister_donut.png";
import point_caffee from "../assets/menu/point_caffee.png";
import say_bread from "../assets/menu/say_bread.png";
import say_burger from "../assets/menu/say_burger.png";
import washoku_sato from "../assets/menu/washoku_sato.png";
import yummy_choice from "../assets/menu/yummy_choice.png";
import indomaret from "../assets/indomaret.png";
import shopping_basket from "../assets/illustration/shopping-basket.png";

import MenuCard from "../parts/MenuCard/MenuCard.jsx";
import { YummyChoice, PointCaffee } from "../data/MenuDataDummy";
export default function StartingFile() {
  const [activeMenu, setActiveMenu] = useState("YummyChoice"); // Initial active menu state

  let totalProduk = 9;
  let totalHarga = "37.000";
  return (
    <div className="flex flex-col mx-0 pb-20">
      <div className="w-full bg-red-500">
        <img src={B_Frappe} className="object-fill bg-black w-full " />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4 ">
        <div className="col-span-1 flex flex-col justify-top ps-9 pe-9">
          <img src={indomaret} className="mb-5" />
          <img
            src={yummy_choice}
            className="mb-5"
            onClick={() => setActiveMenu("YummyChoice")}
          />
          <img src={say_bread} className="mb-5" />
          <img src={washoku_sato} className="mb-5" />
          <img src={say_burger} className="mb-5" />
          <img src={mister_donut} className="mb-5" />
          <img
            src={point_caffee}
            className="mb-5"
            onClick={() => setActiveMenu("PointCaffee")}
          />
        </div>
        <div className="col-span-3 flex flex-col mb-5">
          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-2">
              <input
                type="text"
                className="pl-2 w-full h-10 border-solid border-2 border-gray-300 rounded-md focus:outline-none focus:border-gray-300 active:border-gray-300 text-gray-400"
                placeholder="Mau pesan apa?"
              />
            </div>
            <div className="col-span-1">
              <button className="flex items-center h-10 bg-Red_IDM text-white p-1 pe-5 ps-5 rounded-lg active:bg-Blue_IDM">
                <img src={shopping_basket} alt="Icon" className="mr-2 w-6" />
                <strong>Keranjang</strong>
              </button>
            </div>
          </div>
          <div className="mt-5 ">
            <div className="grid grid-cols-3  gap-y-6 h-[930px] overflow-y-auto no-scrollbar scrollbar-hide">
              {activeMenu === "YummyChoice" &&
                YummyChoice.map((item, index) => (
                  <MenuCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    brand={item.brand}
                  />
                ))}
              {activeMenu === "PointCaffee" &&
                PointCaffee.map((item, index) => (
                  <MenuCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    brand={item.brand}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8 border-t-4 border-gray-370">
        <div className=" col-span-5 flex flex-col ms-12 mt-5">
          <p className="text-3xl font-semibold mb-5">
            Total Produk: {totalProduk}
          </p>
          <p className="text-6xl font-bold mb-5">Rp {totalHarga}</p>
        </div>
        <div className="col-span-3 pt-10 me-10 ">
          <button className="font-bold w-full h-full bg-Red_IDM rounded-lg text-white text-6xl active:bg-Blue_IDM">
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
}
