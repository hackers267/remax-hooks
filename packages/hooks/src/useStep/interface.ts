export interface State {
  position: number;
  isStart: boolean;
  isEnd: boolean;
  value: any;
}

export interface Actions {
  next: () => void;
  prev: () => void;
}
