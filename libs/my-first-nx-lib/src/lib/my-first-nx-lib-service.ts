import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MyService {
    log() {
        console.log('Hello World from library.')
    }

    log2() {
        console.log("Hello world 2");
    }

    log3() {
        console.log("Hello world 3");
    }
} 