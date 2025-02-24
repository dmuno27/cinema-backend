export default interface IMovie {
  id?: number;
  title: string;
  movie_rating_id: number;
  time: string;
  movie_genre_id: number;
  created_at: Date;
  updated_at: Date;
  status: string;
}