import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {
  const [nickname, setNickname] = useState("");
       const handleChange = (event) => {
           setNickname(event.target.value);
        };

const handleSignUp = () => {
    alert(`환영합니다, ${nickname}님!`);
    };

return (
<Dialog title="어서 오세요" message="우리 사이트에 방문하신 것을 환영합니다.">
      <label>
        <input value={nickname} onChange={handleChange} />
        <button onClick={handleSignUp}>가입하기</button>
      </label>
    </Dialog>
  );
}

export default SignUpDialog;
