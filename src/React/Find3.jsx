import React from "react";
import { Link } from "react-router-dom";
import "./Find3.css";

import { FiSearch } from "react-icons/fi";
import Header from "../Components/Header";

import butter from "./butter.png";
import matcha from "./matcha.png";
import tiramisu from "./tiramisu.png";
import oreo from "./oreo.png";



export default function ShopPage() {
 const products = [
  {
    title: "버터떡",
    img: butter,
    desc: "고소한 버터 풍미와 쫀득한 식감이 어우러진 인기 디저트 떡",
  },
  {
    title: "말차모찌",
    img: matcha,
    desc: "진한 말차 향과 부드러운 찹쌀의 조화가 매력적인 디저트 떡",
  },
  {
    title: "티라미수떡",
    img: tiramisu,
    desc: "티라미수의 풍미를 떡으로 재해석한 현대식 디저트 떡",
  },
  {
    title: "오레오 인절미",
    img: oreo,
    desc: "티라미수의 풍미를 떡으로 재해석한 현대식 디저트 떡",
  },
];


  return (
    <>
    <Header />
    <div className="shop-container">

      {/* HEADER */}
      

      {/* CONTENT */}
      <h2 className="shop-title">디저트 떡</h2>
      <div className="product-grid">
  {products.map((item, index) => (
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

      <button className="outside-btn">
        바로가기
      </button>
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