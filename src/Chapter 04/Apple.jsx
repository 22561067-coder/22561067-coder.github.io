import React from "react";
import Fruit from "./Fruit";

function Apple(props){
    return(
        <div>
            <Fruit name ="초록사과" numOfPage={300}></Fruit>
            <Fruit name ="노란사과" numOfPage={400}></Fruit>
            <Fruit name ="빨간사과" numOfPage={500}></Fruit>

        </div>
    );
}

export default Apple;