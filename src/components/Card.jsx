import React from "react";

export const Card = ({ title, purpose, term, input_time }) => {
  const onClickTaskDetails = () => {
    alert(`タスク「${title}」の詳細`);
  };

  const onClickTaskHold = () => {
    alert(`タスク「${title}」を保留`);
  };

  return (
    <div className="card">
      <div>
        <h2>{title}</h2>
        <p>目的: {purpose}</p>
        <p>期限: {term}</p>
        <p>投入時間: {input_time}h</p>
      </div>
      <div className="taskButton">
        <button className="taskDetailsButton" onClick={onClickTaskDetails}>
          詳細
        </button>
        <button className="taskHoldButton" onClick={onClickTaskHold}>
          保留
        </button>
      </div>
    </div>
  );
};
