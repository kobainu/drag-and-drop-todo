import React from "react";
import { Switch, Route } from "react-router-dom";
import { MyTask } from "./MyTask";
import { TaskDetail } from "./TaskDetail";
import { Member } from "./Member";
import { Setting } from "./Setting";

export const Router = () => {
  return (
    <Switch>
      <Route path="/my_task">
        <MyTask />
      </Route>
      <Route path="/my_task/detail">
        <TaskDetail />
      </Route>
      <Route path="/member">
        <Member />
      </Route>
      <Route path="/setting">
        <Setting />
      </Route>
    </Switch>
  );
};
