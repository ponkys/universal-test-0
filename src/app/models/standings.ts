export interface Standings {
    index: number;
    indexAway: number;
    indexChange: string;
    indexHome: number;
    indexOld: number;
    team: Team;
    type: number;
    type_name: string;
}

interface Team {
    id: string;
    idInternal: string;
    isNational: boolean;
    name: string;
    teamstats: Stats;
}

interface Stats {
    diff: number;
    diffAway: number;
    diffHome: number;
    drawn: number;
    drawnAway: number;
    drawnHome: number;
    goalsGot: number;
    goalsGotAway: number;
    goalsGotHome: number;
    goalsShot: number;
    goalsShotAway: number;
    goalsShotHome: number;
    played: number;
    playedAway: number;
    playedHome: number;
    points: number;
    pointsAway: number;
    pointsHome: number;
    lost: number;
    lostAway: number;
    lostHome: number;
    redCards: number;
    topScorer: Player;
    won: number;
    wonAway: number;
    wonHome: number;
    yellowCards: number;
}

interface Player {
    name: string;
    ranking: string;
    stat: string;
    id: string;
    imageSrc: string;
}
