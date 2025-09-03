import type { GoalStatus, TGoal } from "../../types/apiResponse.ts";

type GoalsState = {
  goals: TGoal[];
  filterStatus: GoalStatus | "all";
  sortBy: "priority" | "title";
};

export const INITIAL_STATE: GoalsState = {
  goals: [],
  filterStatus: "all",
  sortBy: "priority",
};
