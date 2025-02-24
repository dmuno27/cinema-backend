interface IProgrammingDateTime {
    date: Date;
    times: string[];
}

export interface IMovieProgramming {
    room_id: number;
    movie_id: number;
    dateTimes: IProgrammingDateTime[];
    created_at: Date;
    status: string;
}
