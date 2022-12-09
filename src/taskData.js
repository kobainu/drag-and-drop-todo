import { v4 as uuidv4 } from "uuid";

export const TaskData = [
  {
    id: uuidv4(),
    title: "予定業務",
    tasks: [
      // ここにaxiosでDBからデータを取得する
      {
        id: uuidv4(),
        title: "請求書作成",
        purpose: "請求依頼",
        term: "2022年04月01日",
        input_time: 2,
      },
      {
        id: uuidv4(),
        title: "得意先に電話",
        purpose: "売掛金の催促",
        term: "2022年04月01日",
        input_time: 2,
      },
      {
        id: uuidv4(),
        title: "月末資料作成",
        purpose: "月度報告",
        term: "2022年04月01日",
        input_time: 2,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "作業中",
    tasks: [
      {
        id: uuidv4(),
        title: "備品発注",
        purpose: "備品の補充",
        term: "2022年04月01日",
        input_time: 2,
      },
      {
        id: uuidv4(),
        title: "新人教育",
        purpose: "請求書の作成方法を覚えてもらう",
        term: "2022年04月01日",
        input_time: 2,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "完了",
    tasks: [
      {
        id: uuidv4(),
        title: "資料整理",
        purpose: "不要な資料の破棄",
        term: "2022年04月01日",
        input_time: 2,
      },
    ],
  },
];
