import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import "./Find.css";

import Header from "../Components/Header";

import injeolmi from "./injul.png";
import chapssal from "./chapssal.png";
import songpyeon from "./songpyeon.png";
import bakseol from "./baksul.png";
import baram from "./baram.png";

import hk from "./hk.png";
import hobak from "./hobak.png";
import ssuk from "./ssuk.png";
import rainbow from "./rainbow.png";
import yak from "./yak.png";

import su from "./su.png";
import du from "./du.png";
import zng from "./zng.png";
import hwa from "./hwa.png";
import bing from "./bing.png";

import ome from "./ome.png";
import round from "./round.png";
import jan from "./jan.png";
import back from "./back.png";
import cloud from "./cloud.png";


export default function ShopPage() {
  const location = useLocation();

const keyword =
  new URLSearchParams(location.search).get("search") || "";

  
  const products = [
    { title: "인절미", img: injeolmi, desc: "판매자: 떡마을 떡집" },
    { title: "찹쌀떡", img: chapssal, desc: "판매자: 떡마을 떡집" },
    { title: "송편", img: songpyeon, desc: "판매자: 떡마을 떡집" },
    { title: "백설기", img: bakseol, desc: "판매자: 떡마을 떡집" },
    { title: "바람떡", img: baram, desc: "판매자: 떡마을 떡집" },

    { title: "흑임자 인절미", img: hk, desc: "오늘의 추천 떡" },
    { title: "호박설기", img: hobak, desc: "오늘의 추천 떡" },
    { title: "쑥개떡", img: ssuk, desc: "오늘의 추천 떡" },
    { title: "무지개떡", img: rainbow, desc: "오늘의 추천 떡" },
    { title: "약편", img: yak, desc: "오늘의 추천 떡" },

    { title: "수박떡", img: su, desc: "여름에 어울리는 떡" },
    { title: "두텁떡", img: du, desc: "여름에 어울리는 떡" },
    { title: "증편", img: zng, desc: "여름에 어울리는 떡" },
    { title: "화전", img: hwa, desc: "여름에 어울리는 떡" },
    { title: "빙수떡", img: bing, desc: "여름에 어울리는 떡" },

    { title: "오메기떡", img: ome, desc: "얼려서 먹으면 더 맛있는 떡" },
    { title: "경단", img: round, desc: "얼려서 먹으면 더 맛있는 떡" },
    { title: "잔기지떡", img: jan, desc: "얼려서 먹으면 더 맛있는 떡" },
    { title: "백년초떡", img: back, desc: "얼려서 먹으면 더 맛있는 떡" },
    { title: "구름떡", img: cloud, desc: "얼려서 먹으면 더 맛있는 떡" },
  ];

  const filteredProducts = products.filter((item) =>
  item.title.toLowerCase().includes(keyword.toLowerCase())
);

  return (
    <>
      <Header />

      <div className="shop-container">
        <h2 className="shop-title">떡 찾기</h2>

        <div className="product-grid">
          {filteredProducts.map((item, index) => (
            <div key={index} className="product-wrapper">
              <div className="product-card">
                <div className="product-img">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="product-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>

              {item.title === "인절미" ? (
  <Link to="/injeolmi">
    <button className="outside-btn">
      바로가기
    </button>
  </Link>
) : (
  <button className="outside-btn">
    바로가기
  </button>
)}
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        © 2026 떡위키. All rights reserved.
      </footer>
    </>
  );
}