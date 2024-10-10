export interface MenuItem {
  icon: string;
  route?: string;
  label: string;
  children?: MenuItem[];
}