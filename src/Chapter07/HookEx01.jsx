import React, { useState } from "react";

const btnStyle1 = {
  marginRight: 8,
  padding: "8px 12px"
};

const btnStyle2 = {
  padding: "8px 12px"
};

function HookEx01() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 16, fontWeight: "bold" }}>
      <p>{`현재 카운터 값은 ${count}입니다.`}</p>

      <button style={btnStyle1} onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button style={btnStyle2} onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default HookEx01;