export type StrategyStatus = "active" | "draft" | "completed" | "archived";

export interface StrategicGoal {
  id: string;
  title: string;
  description: string;
}

export interface OperationalGoal {
  id: string;
  strategicGoalId: string;
  title: string;
  description: string;
}

export interface Task {
  id: string;
  operationalGoalId: string;
  title: string;
  description: string;
  status: "planned" | "in-progress" | "done";
}

export interface StrategyDocument {
  id: string;
  title: string;
  community: string;
  region: string;
  period: string;
  status: StrategyStatus;
  adoptedAt: string;
  sourceUrl: string;
  summary: string;
  strategicGoals: StrategicGoal[];
  operationalGoals: OperationalGoal[];
  tasks: Task[];
}
