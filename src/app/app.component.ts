import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "./state/state/state";
import { INCREMENT, DECREMENT } from "./state/actions/action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  data = '';

  increment(){
    this.store.dispatch({type: INCREMENT});
  }

  decrement(){
    this.store.dispatch({type: DECREMENT});
  }

  constructor (private store:Store<State>){
    console.log(store);

    store.select('mainStoreReducer')
      .subscribe( (data:State ) => {
        this.data = 'Counter value is ' + data.counter;
      });
  }
}
