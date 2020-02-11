export interface Item {
    id: number;
    name: string;
    role: string;
    score: number;
    type : Types
    // type : string
    // image : string;
}

export enum Types {
    SOCCER = "Soccer",
    ARTIST = "Artist"
}
