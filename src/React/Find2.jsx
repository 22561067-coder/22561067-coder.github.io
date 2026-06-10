import React from "react";
import "./Find2.css";
import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import Header from "../Components/Header";

import injeol from "./injeol.png";
import sssuk from "./sssuk.png";
import ssong from "./ssong.png";

export default function Find2() {
  const recipes = [
    {
      title: "쑥떡 만들기",
      img:sssuk,
      desc: "자연의 향을 그대로 담은 전통 쑥떡 레시피",
      level: "초급",
      steps: "쑥 손질 → 반죽 → 찜기 → 완성",
    },
    {
      title: "인절미 만들기",
      img:injeol,
      desc: "고소함이 살아있는 국민 떡 레시피",
      level: "중급",
      steps: "찹쌀 찌기 → 떡 치기 → 콩가루 묻히기 → 완성",
    },
    {
      title: "송편 만들기",
      img:ssong,
      desc: "속이 꽉 찬 전통 명절 떡 레시피",
      level: "중급",
      steps: "반죽 → 속 채우기 → 모양 만들기 → 찜",
    },
  ];

  return (
    <>
    <Header />
    <div className="shop-container">

      {/* HEADER */}
      

      {/* TITLE */}
      <h2 className="shop-title">떡 만들기 가이드</h2>

      {/* LIST */}
      <div className="shop-list">

        {recipes.map((item, index) => (
          <div key={index} className="shop-card recipe-card">

            <div className="shop-img-2">
  <img src={item.img} alt={item.title} />

  <span className="shop-badge">
    {item.level}
  </span>
</div>

            <div className="shop-info">

              <div className="shop-header">
                <h3>{item.title}</h3>
              </div>

              <p className="shop-desc">{item.desc}</p>

              <p className="shop-location">
                 단계: {item.steps}
              </p>

              <button className="shop-btn">레시피 보기</button>

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