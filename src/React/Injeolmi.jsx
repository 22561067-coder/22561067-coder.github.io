import Header from "../Components/Header";
import "./Injeolmi.css";

import injeolmi from "./injul.png";

export default function Injeolmi() {
  return (
    <>
      <Header />

      <div className="detail-container">

        <h1 className="detail-title">인절미</h1>

        <section className="intro-section">

          <div className="intro-image">
            <img src={injeolmi} alt="인절미" />
          </div>

          <div className="intro-text">
            <h2>인절미란?</h2>

            <p>
              인절미는 찹쌀을 쪄서 친 뒤
              고소한 콩고물을 입힌
              대한민국 대표 전통 떡입니다.
            </p>

            <p>
              쫄깃한 식감과 담백한 맛으로
              오랫동안 사랑받고 있습니다.
            </p>
          </div>

        </section>

        <section className="feature-section">
          <h2>인절미의 특징</h2>

          <ul>
            <li>고소한 콩고물</li>
            <li>쫄깃한 찹쌀 식감</li>
            <li>전 세대가 즐기는 전통 떡</li>
          </ul>
        </section>

        <section className="shop-section">
          <h2>판매 중인 떡집</h2>

          <div className="seller-card">
            <h3>김씨 전통떡집</h3>
            <p>서울 강남구</p>
            <p>⭐ 4.8</p>
          </div>

          <div className="seller-card">
            <h3>한옥 떡마을</h3>
            <p>서울 종로구</p>
            <p>⭐ 4.9</p>
          </div>

          <div className="seller-card">
            <h3>달빛 떡공방</h3>
            <p>서울 마포구</p>
            <p>⭐ 4.6</p>
          </div>
        </section>

      </div>
    </>
  );
}