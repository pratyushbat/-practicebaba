import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements DoCheck {
  name = 'Anusha';
  counter: number = 0;
  constructor() {
    //render initial component
    //set and update input roperty if required
    //compete projection phase
    //execute interppolation/bidings
    //Update- DOM if required
    //complete own view phase once child view are done
    console.log('hello consrtructor');
  }
  increase() {
    setInterval(() => (this.counter += 2), 1000);
    console.log(
      'event like click,submit,mouseoiver \n async fun settime \n API request'
    );
  }

  ngOnInit(): void {
    console.log('hello: ngoninit after first initialization completed');

    //view def created
    //initial template rendered
    //input prop arrived
  }
  ngOnChanges() {
    console.log(
      'hello: ng on changes - called only if this has input property'
    );
  }

  ngDoCheck(): void {
    console.log('Hello: ng do check changes');
  }

  ngAfterContentInit() {
    //Called once after the first ngDoCheck().
    console.log('hello: ng on content init');
  }
  ngAfterContentChecked() {
    console.log(
      'hello: ng on content checked //set and execute property binding binding'
    );
  }
  ngAfterViewInit() {
    console.log('hello: ng on View init');
  }
  ngAfterViewChecked() {
    console.log('hello: ng on View checked');
    //complete view rendered
    //all binding executed
    //child view are also rendered
  }
}
