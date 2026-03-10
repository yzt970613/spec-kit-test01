export type SpeckitStage = 'constitution' | 'spec' | 'plan' | 'tasks' | 'implement';

export interface SpeckitQuestionRecord {
  id: string;
  sequence: number;
  questionText: string;
  stage: SpeckitStage;
  summary: string;
}

