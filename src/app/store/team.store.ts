import { Injectable } from "@angular/core";
import { Team } from "../model/team.model";
import { Store } from "./store";

export class TeamState {
    teams: [ Team, Team ] = [
        new Team(),
        new Team()
    ];
}

@Injectable({
    providedIn: 'root'
})
export class TeamStore extends Store {
    constructor() {
        super(new TeamState());
    }
}