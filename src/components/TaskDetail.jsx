import React from "react";

export const TaskDetail = ({
  show,
  setShow,
  title,
  purpose,
  term,
  input_time,
}) => {
  const taskUpdateButton = () => {
    alert("更新しました");
  };

  const closeModalButton = () => {
    setShow(false);
  };

  return (
    <>
      {show ? (
        <div className="taskDetail" id="overlay">
          <div id="modalContent">
            <div className="taskContent">
              <label htmlFor="title">タスク名:</label>
              <input
                type="text"
                value={title}
                placeholder="タスク名を入力して下さい"
              />
            </div>
            <div className="taskContent">
              <label htmlFor="title">目的:</label>
              <input
                type="text"
                value={purpose}
                placeholder="業務の目的を明確にしましょう"
              />
            </div>
            <div className="taskContent">
              <label htmlFor="title">期限:</label>
              <input
                type="text-local"
                value={term}
                placeholder="期限を決めましょう"
              />
            </div>
            <div className="taskContent">
              <label htmlFor="title">投入時間:</label>
              <input
                type="text"
                value={input_time}
                placeholder="見積もりは余裕を持ちましょう"
              />
            </div>
            <div className="taskContent">
              <label htmlFor="title">メモ:</label>
              <textarea
                type="text"
                value="メモ"
                placeholder="その他必要な情報はメモを残しましょう"
              />
            </div>
            <button onClick={taskUpdateButton}>更新</button>
            <button onClick={closeModalButton}>閉じる</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
