export interface Team{
    id:number ,
    name:string,
    fullname?:string,
    code?:string
}
export interface Stats{
    
    name:string,
    abbrevation:string,
    avaragepointconceded:number,
    avaragepointscored:number,
    association?:string,
    lastWins?:Wins[],
    
}

export type Wins = 'W'|'L'