export interface LayoutChild {
  text: string;
  to: string;
}

export interface LayoutItem {
  text: string;
  to?: string;
  icon: string;
  subtext?: LayoutChild[];
}
