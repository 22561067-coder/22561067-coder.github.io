import { Routes, Route } from "react-router-dom";

import Main from "./React/Main";
import ShopList from "./React/Find1";
import ShopPage from "./React/Find";
import MakeTteokPage from "./React/Find2";
import Find3 from "./React/Find3";
import Find4 from "./React/Find4";
import Mailbox from "./Chapter09/Mailbox";
import Injeolmi from "./React/Injeolmi";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shop" element={<ShopList />} />
      <Route path="/find" element={<ShopPage />} />
      <Route path="/make" element={<MakeTteokPage />} />
      <Route path="/latest" element={<Find3 />} />
      <Route path="/storage" element={<Find4 />} />
      <Route path="/mailbox" element={<Mailbox unreadMessages={['React', 'Re: 프로젝트', '회의 일정']} />} />
      <Route path="/find" element={<ShopPage />} />
      <Route path="/injeolmi" element={<Injeolmi />} />
    </Routes>
  );
}