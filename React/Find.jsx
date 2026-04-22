import React from "react";
import "./Find.css";
import { Link } from "react-router-dom";

export default function ShopPage() {
  const products = [
    {
      title: "[**떡집] 쑥떡",
      desc: "쑥향이 입안을 가득 채우는 고급형 전통 떡",
      price: "3,990원",
    },
    {
      title: "[oo떡집] 인절미",
      desc: "고소하고 진한 풍미에서 나오는 극강의 만족감",
      price: "5,990원",
    },
    {
      title: "[@@떡집] 송편",
      desc: "새로운 맛이 터지는 프리미엄 떡",
      price: "4,490원",
      origin: "4,990원",
      discount: "10%",
    },
  ];

  return (
    <div className="shop-container">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">

          <h1 className="logo">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              떡위키
            </Link>
          </h1>

          <nav className="nav">
            <Link to="/shop">떡집 찾기</Link>
            <Link to="/search">떡 찾기</Link>
            <Link to="/make">떡 만들기</Link>
            <Link to="/trend">최신 떡</Link>
            <Link to="/storage">떡 보관법</Link>
          </nav>

        </div>
      </header>

      <h2 className="shop-title">떡 찾기</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div key={index} className="product-card">

            <div className="img-box">
              <div className="img-placeholder" />
            </div>

            <div className="info">

              <h3>{item.title}</h3>
              <p className="desc">{item.desc}</p>

              <div className="price-box">
                {item.origin && <span className="origin">{item.origin}</span>}
                {item.discount && <span className="discount">{item.discount}</span>}
                <span className="price">{item.price}</span>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}