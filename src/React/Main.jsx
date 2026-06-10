import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import Header from "../Components/Header";
import "./Main.css";


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


export default function MainPage() {
  const productRef = useRef();
  const recommendRef = useRef();
  const seasonRef = useRef(); 
  const coldRef = useRef();

  const [keyword, setKeyword] = useState("");

  const products = [
  { name: "인절미", img: injeolmi },
  { name: "찹쌀떡", img: chapssal },
  { name: "송편", img: songpyeon },
  { name: "백설기", img: bakseol },
  { name: "바람떡", img: baram },
];
const recommend = [
  { name: "흑임자 인절미", img: hk },
  { name: "호박설기", img: hobak },
  { name: "쑥개떡", img: ssuk },
  { name: "무지개떡", img: rainbow },
  { name: "약편", img: yak }
];

const season = [
  { name: "수박떡", img: su },
  { name: "두텁떡", img: du },
  { name: "증편", img: zng },
  { name: "화전", img: hwa },
  { name: "빙수떡", img: bing }
];

const cold = [
  { name: "오메기떡", img: ome },
  { name: "경단", img: round },
  { name: "잔기지떡", img: jan },
  { name: "백년초떡", img: back },
  { name: "구름떡", img: cloud }
];


  const scroll = (ref, amount) => {
  if (!ref?.current) return;

  ref.current.scrollBy({
    left: amount,
    behavior: "smooth",
  });
};

  return (
    <div className="container">

      <Header />

      {/* HERO */}
      <section className="hero">
        <h2>대한민국 모든 떡 정보 정리</h2>
        <p>다양한 떡 정보를 한 곳에서 확인하세요</p>
      </section>

      {/* ================= 인기 떡 ================= */}
      <div className="slider-wrapper">

        <div className="section-header">
          <h2>인기 떡</h2>
          <p>요즘 많이 찾는 떡이에요</p>
        </div>

        <button className="slide-btn left" onClick={() => scroll(productRef, -300)}>◀</button>

        <main ref={productRef} className="grid">
          {products.map((item, i) => (
  <div key={i} className="product-wrapper">
    <div className="product-card">

      <div className="product-img">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="product-info">
        <h3>{item.name}</h3>
        <p>판매자: 떡마을 떡집</p>
      </div>

    </div>
    <button className="outside-btn">바로가기</button>
  </div>
))}
        </main>

        <button className="slide-btn right" onClick={() => scroll(productRef, 300)}>▶</button>
      </div>

      {/* ================= 오늘의 추천 떡 ================= */}
      <div className="slider-wrapper">

        <div className="section-header">
          <h2>오늘의 추천 떡</h2>
          <p>지금 가장 잘 어울리는 떡이에요</p>
        </div>

        <button className="slide-btn left" onClick={() => scroll(recommendRef, -300)}>◀</button>

        <main ref={recommendRef} className="grid">
          {recommend.map((item, i) => (
  <div key={i} className="product-wrapper">
    <div className="product-card">

      <div className="product-img">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="product-info">
        <h3>{item.name}</h3>
        <p>오늘의 추천 떡</p>
      </div>

    </div>
    <button className="outside-btn">바로가기</button>
  </div>
))}
        </main>
        <button className="slide-btn right" onClick={() => scroll(recommendRef, 300)}>▶</button>
      </div>

      {/* ================= 계절 떡 ================= */}
      <div className="slider-wrapper">

        <div className="section-header">
          <h2>계절 떡</h2>
          <p>지금 계절에 어울리는 떡이에요</p>
        </div>

        <button className="slide-btn left" onClick={() => scroll(seasonRef, -300)}>◀</button>

        <main ref={seasonRef} className="grid">
          {season.map((item, i) => (
  <div key={i} className="product-wrapper">
    <div className="product-card">

      <div className="product-img">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="product-info">
        <h3>{item.name}</h3>
        <p>여름에 어울리는 떡</p>
      </div>

    </div>
    <button className="outside-btn">바로가기</button>
  </div>
))}
        </main>

        <button className="slide-btn right" onClick={() => scroll(seasonRef, 300)}>▶</button>
      </div>

            {/* ================= 계절 떡 ================= */}
      <div className="slider-wrapper">

        <div className="section-header">
          <h2>차갑게 먹는 떡</h2>
          <p>냉장 또는 냉동 상태로 먹으면 식감이 살아나는 시원한 떡이에요</p>
        </div>

        <button className="slide-btn left" onClick={() => scroll(coldRef, -300)}>◀</button>

        <main ref={coldRef} className="grid">
          {cold.map((item, i) => (
  <div key={i} className="product-wrapper">
    <div className="product-card">

      <div className="product-img">
        <img src={item.img} alt={item.name} />
      </div>

      <div className="product-info">
        <h3>{item.name}</h3>
        <p>얼려서 먹으면 더 맛있는 떡</p>
      </div>

    </div>
    <button className="outside-btn">바로가기</button>
  </div>
))}
        </main>


        <button className="slide-btn right" onClick={() => scroll(coldRef, 300)}>▶</button>
      </div>

      <footer className="footer">
        © 2026 떡위키. All rights reserved.
      </footer>

    </div>
  );
}