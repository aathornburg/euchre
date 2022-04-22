import { BehaviorSubject, Observable } from "rxjs"
import { distinctUntilChanged, map } from "rxjs/operators";

export interface State {
    [key: string]: any
}

export abstract class Store {

    private subject: BehaviorSubject<State>;
    private store: Observable<State>;

    constructor(initialState: State) {
        this.subject = new BehaviorSubject<State>(initialState)
        this.store = this.subject.asObservable().pipe(distinctUntilChanged());
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(
            map<State, T>((state: State) => state[name]),
            distinctUntilChanged<T>()
        );
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, 
            [name]: state
        });
    }

    get value(): State {
        return this.subject.value;
    }
}