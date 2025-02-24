export default interface IBooking {
  id?: number;
  movie_programming_id: number;
  room_seat_id: number;
  customer_name: string;
  customer_email: string;
  created_at: Date;
  status: string;
}
