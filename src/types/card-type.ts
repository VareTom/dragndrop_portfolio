export type CardType = {
  title: string;
  content?: string;
  duration?: string;
  columns?: Column[];
}

export type Column = {
  key: string;
  value: string;
}