import React from "react";
import Card from "./Card";

const profiles = [
  {
    id: 1,
    title: "MIYEON",
    color: "red",
    intro: "저의 생일은 1997년 1월 31일입니다.",
    src:
      "https://w.namu.la/s/b344b1a19d78956cae7208f486a659a265d5a8a96a398c2b01660d87ec4cd9529c3a3a9245b638e2e290ee74ad5eb9e5046746bc32408aaac6a99f43a23f2bcaf012b2180d6e391b94979e1233dc81487c1a7145de6d08dcc3fa4b3c41c457e61db5be27194eb2d348e6fdd5d5d67656",
  },
];

function ProfileCard(props) {
  return (
    <div style={{ display: "flex" }}>
      {profiles.map((li) => {
        return (
          <Card
            key={li.id}
            title={li.title}
            backgroundColor={li.color}
          >
            <p>안녕하세요, {li.title}입니다.</p>
            <p>{li.intro}</p>

            <img
              src={li.src}
              style={{ width: "300px" }}
              alt={li.title}
            />
          </Card>
        );
      })}
    </div>
  );
}

export default ProfileCard;