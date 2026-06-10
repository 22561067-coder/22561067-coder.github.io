import React from "react";
import "./Find1.css";
import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import Header from "../Components/Header";

import kim from "./kim.png";
import moon from "./moon.png";
import hanok from "./hanok.png";

export default function ShopList() {
  const shop = [
    {
      name: "김씨 전통떡집",
       img: kim,
      desc: "30년 전통의 수제 떡 전문점",
      location: "서울 강남구",
      signature: "인절미 / 쑥떡 / 약식",
      rating: "4.8",
      badge: "전통 수제 떡",
    },
    {
      name: "달빛 떡공방",
      img: moon,
      desc: "현대식 감성을 더한 프리미엄 떡",
      location: "서울 마포구",
      signature: "송편 / 찹쌀떡 / 설기",
      rating: "4.6",
      badge: "신규 오픈",
    },
    {
      name: "한옥 떡마을",
      img: hanok,
      desc: "전통 방식 그대로 만드는 수제 떡",
      location: "서울 종로구",
      signature: "백설기 / 꿀떡 / 인절미",
      rating: "4.9",
      badge: "수제 떡",
    },
  ];

  return (
    <>
    <Header />
    <div className="shop-container">

      {/* HEADER */}
    

      <h2 className="shop-title">떡집 찾기</h2>

      {/* LIST */}
      <div className="shop-list">
        {shop.map((shop, index) => (
          <div key={index} className="shop-card">

            <div className="shop-img-1">
            <img src={shop.img} alt={shop.name} />

             <span className="shop-badge">
               {shop.badge}
             </span>
           </div>

            <div className="shop-info">

              <div className="shop-header">
                <h3>{shop.name}</h3>
                <span className="rating">⭐ {shop.rating}</span>
              </div>

              <p className="shop-desc">{shop.desc}</p>

              <p className="shop-location"> {shop.location}</p>

              <p className="shop-signature">
                대표 메뉴: {shop.signature}
              </p>

              <button className="shop-btn">상세보기</button>

            </div>

          </div>
        ))}
      </div>

    </div>
   </> 
  );
}