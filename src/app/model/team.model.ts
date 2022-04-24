import { Player } from "./player.model";

export class Team {

    private players: [ Player, Player ] = [
        new Player(),
        new Player()
    ];

    private currentScore: number = 0;

    public getPlayer(index: number) {
        return this.players[index];
    }

    public setPlayer(index: number, player: Player): void {
        this.players[index] = player;
    }

}