export interface TableAction {
  icon: string;
  tooltip: string;
  action: (row: any) => void;
}
