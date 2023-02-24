import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.scss'],
})
export class ByeComponent {
  @Input()
  user: string;

  constructor() {
    console.log('bye constructor');
  }

  ngOnInit(): void {
    console.log('Bye: ngoninit');
  }
  ngOnChanges() {
    console.log('Bye: ng on changes');
  }
  ngDocheck() {
    console.log('Bye: ng do check changes');
  }
  ngAfterContentInit() {
    //Called once after the first ngDoCheck().
    console.log('Bye: ng on content init');
  }
  ngAfterContentChecked() {
    console.log('Bye: ng on content checked');
  }
  ngAfterViewInit() {
    console.log('Bye: ng on View init');
  }
  ngAfterViewChecked() {
    console.log('Bye: ng on View checked');
  }

  ngOnDestroy() {
    console.log('Bye: ng on Destroy');
  }
}
