import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

export default function MainPage() {
  const sliderRef = useRef();
  const productRef = useRef();

  const scroll = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">

          {/* 🔥 로고 클릭 → 메인 */}
          <Link to="/" className="logo">떡위키</Link>

          <nav className="nav">
            <Link to="/shop">떡집 찾기</Link>
            <Link to="/find">떡 찾기</Link>
            <Link to="/make">떡 만들기</Link>
            <Link to="/latest">최신 떡</Link>
            <Link to="/storage">떡 보관법</Link>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>대한민국 모든 떡 정보 정리</h2>
        <p>다양한 떡 정보를 한 곳에서 확인하세요</p>
      </section>

      {/* FEATURES */}
      <div className="slider-wrapper">

        <div className="section-header">
          <h2>주요 기능 바로가기</h2>
        </div>

        <button className="slide-btn left" onClick={() => scroll(sliderRef)}>
          ◀
        </button>

        <main ref={sliderRef} className="grid">

          {[
            { title: "떡집 찾기", desc: "내 주변 떡집을 쉽게 찾아보세요", path: "/shop" },
            { title: "원하는 떡 찾기", desc: "지금 원하는 떡 종류를 검색해보세요", path: "/search" },
            { title: "떡 만들기", desc: "집에서 간단하게 만드는 레시피", path: "/make" },
            { title: "떡 트렌드", desc: "요즘 인기 떡 확인", path: "/trend" },
            { title: "떡 보관법", desc: "신선하게 보관하는 방법", path: "/storage" },
          ].map((item, i) => (
            <Link to={item.path} key={i} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button>바로가기</button>
            </Link>
          ))}

        </main>

        <button className="slide-btn right" onClick={() => scroll(sliderRef)}>
          ▶
        </button>

      </div>

      {/* PRODUCTS */}
      <div className="slider-wrapper">

        <div className="section-header">
          <h2>인기 상품</h2>
          <p>요즘 많이 찾는 떡 상품이에요</p>
        </div>

        <button className="slide-btn left" onClick={() => scroll(productRef)}>
          ◀
        </button>

        <main ref={productRef} className="grid">

          {[
            { title: "찹쌀떡 세트", price: "12,000원" },
            { title: "쑥떡", price: "8,000원" },
            { title: "인절미", price: "10,000원" },
            { title: "송편", price: "15,000원" },
            { title: "백설기", price: "9,000원" },
          ].map((item, i) => (
            <div key={i} className="product-card">

              <div className="product-img"></div>

              <div className="product-info">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>

              <div className="product-hover">
                <button>바로가기</button>
              </div>

            </div>
          ))}

        </main>

        <button className="slide-btn right" onClick={() => scroll(productRef)}>
          ▶
        </button>

      </div>

      <footer className="footer">
        © 2026 떡위키. All rights reserved.
      </footer>

    </div>
  );
}