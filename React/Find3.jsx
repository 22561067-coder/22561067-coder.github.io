import React from "react";
import { Link } from "react-router-dom";
import "./Find3.css";

export default function ShopPage() {
  const products = [
    {
      title: "딸기 설기",
      desc: "부드러운 설기에 상큼한 딸기를 더한 요즘 가장 인기 있는 디저트 떡",
      price: "6,900원",
      origin: "7,900원",
      discount: "12%",
    },
    {
      title: "프리미엄 쑥떡",
      desc: "진한 쑥 향과 쫀득한 식감이 살아있는 전통 대표 웰빙 떡",
      price: "4,500원",
    },
    {
      title: "고소한 인절미",
      desc: "콩고물의 깊은 풍미와 쫀득한 식감이 완벽한 국민 인기 떡",
      price: "5,200원",
      origin: "5,900원",
      discount: "11%",
    },
  ];

  return (
    <div className="shop-container">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">
            <Link to="/" style={{ textDecoration: "none", color: "#3A3A3A" }}>
              떡위키
            </Link>
          </h1>

          <nav className="nav">
            <Link to="/shop">떡집 찾기</Link>
                        <Link to="/find">떡 찾기</Link>
                        <Link to="/make">떡 만들기</Link>
                        <Link to="/latest">최신 떡</Link>
                        <Link to="/storage">떡 보관법</Link>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <h2 className="shop-title">최신 떡</h2>

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