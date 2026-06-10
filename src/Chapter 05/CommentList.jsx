import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"제니",
        comment:"안녕하세요, 블랙핑크입니다.",
        imageUrl:"https://en.wikipedia.org/wiki/Jennie_(singer)#/media/File:Jennie_2026_GDA_1.jpg",
    },
    {
        name:"로제",
        comment:"리액트 재미있어요",
    },
    {
        name:"리사",
        comment:"저도 리액트 배워보고 싶네요.",
    },
];
//원래 코드를 압축
function CommentList(props) {
    return (
        <div>
        {comments.map((comment) => {
            return (
                <Comment
name={comment.name}
comment={comment.comment}/>
                );
            })}
        </div>
    );
}
export default CommentList;