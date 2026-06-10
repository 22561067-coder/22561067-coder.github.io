import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keyword.trim()) return;

    navigate(`/find?search=${encodeURIComponent(keyword)}`);
  };

  return (
    <header className="header">
      <div className="header-inner">

        <Link to="/" className="logo">
          떡위키
        </Link>

        <div className="search-box">
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button className="search-btn" onClick={handleSearch}>
            <FiSearch />
          </button>
        </div>

        <nav className="nav">
          <Link to="/shop">떡집 찾기</Link>
          <Link to="/find">떡 찾기</Link>
          <Link to="/make">떡 만들기</Link>
          <Link to="/latest">디저트 떡</Link>
          <Link to="/storage">떡 보관법</Link>
        </nav>

      </div>
    </header>
  );
}