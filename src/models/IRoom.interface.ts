export interface IRoomSeat {
  row: string;
  seats: number[];
}

export interface IRoom {
  id: number;
  name: string;
  capactiy: number;
  created_at: Date;
  updated_at: Date;
  status: string;
}

export interface ISaveRoom {
  room: IRoom;
  seats: IRoomSeat[];
}
