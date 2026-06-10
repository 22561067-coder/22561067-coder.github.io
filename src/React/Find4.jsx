import React from "react";
import "./Find4.css";
import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import Header from "../Components/Header";

import injeol from "./injeol.png";
import sssuk from "./sssuk.png";
import ssong from "./ssong.png";
import baek from "./baek.png";

export default function Find4() {
  const tips = [
    {
      title: "인절미 보관법",
      img:injeol,
      desc: "고소한 맛을 오래 유지하는 핵심 방법",
      tip: "실온 1일 / 냉동 보관 추천 / 먹기 전 살짝 해동 후 구움",
    },
    {
      title: "쑥떡 보관법",
      img:sssuk,
      desc: "향과 촉촉함을 유지하는 전통 방식",
      tip: "냉동 보관 필수 / 랩 밀봉 / 찜기 재가열 시 향 복원",
    },
    {
      title: "송편 보관법",
      img:ssong,
      desc: "명절 떡을 끝까지 맛있게 먹는 방법",
      tip: "서로 붙지 않게 냉동 / 해동 후 살짝 찜으로 복원",
    },
    {
      title: "백설기 보관법",
      img:baek,
      desc: "부드러움을 오래 유지하는 핵심 포인트",
      tip: "공기 차단 필수 / 냉동 후 전자레인지 10~20초",
    },
  ];

  return (
    <>
    <Header />
    <div className="shop-container">

      {/* HEADER (라우터 적용) */}
      

      {/* TITLE */}
      <h2 className="shop-title">떡 보관법</h2>

      {/* CARD LIST */}
      <div className="shop-list">

        {tips.map((item, i) => (
          <div key={i} className="shop-card storage-card">

            <div className="shop-img-4">
  <img src={item.img} alt={item.title} />

  <span className="shop-badge">
    TIP
  </span>
</div>

            <div className="shop-info">

              <div className="shop-header">
                <h3>{item.title}</h3>
              </div>

              <p className="shop-desc">{item.desc}</p>

              <div className="shop-tip">
                {item.tip}
              </div>

              <button className="shop-btn">자세히 보기</button>

            </div>

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