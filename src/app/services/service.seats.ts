import { Injectable } from "@angular/core";
import { Seat } from "../models/Seat";
import { AllSeats } from "../mock-seats";

@Injectable()
export class SeatService {
    constructor() {}

    getSeats():Promise<Seat[]>{
        return Promise.resolve(AllSeats);
    }

}