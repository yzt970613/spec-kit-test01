export type TemplateStatus = 'ready' | 'coming-soon';

export interface TemplateEntry {
  id: string;
  title: string;
  summary: string;
  routePath: string;
  category: 'list' | 'interaction' | 'record' | 'other';
  status: TemplateStatus;
  tags: string[];
  sortOrder: number;
}

