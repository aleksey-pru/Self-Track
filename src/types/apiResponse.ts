import type { RootState } from "../store/store.ts";

export type GoalStatus = "todo" | "in-progress" | "done";
export type GoalPriority = 1 | 2 | 3;

export type TGoal = {
  id: string;
  title: string;
  description?: string;
  status: GoalStatus;
  priority: GoalPriority;
};

export type TSelectGoals = (state: RootState) => TGoal[];
