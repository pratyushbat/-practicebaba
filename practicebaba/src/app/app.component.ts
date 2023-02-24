import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  phVal: string;
  constructor() {
    // console.log('App consrtructor');
  }

  // ngOnInit(): void {
  //   console.log('App: ngoninit');
  // }
  // ngOnChanges() {
  //   console.log('App: ng on changes');
  // }
  // ngAfterContentInit() {
  //   //Called once after the first ngDoCheck().
  //   console.log('App: ng on content init');
  // }
  // ngAfterContentChecked() {
  //   console.log('App: ng on content checked');
  // }
  // ngAfterViewInit() {
  //   console.log('App: ng on View init');
  // }
  // ngAfterViewChecked() {
  //   console.log('App: ng on View checked');
  // }

  // ngOnDestroy() {
  //   console.log('App: ng on Destroy');
  // }

  changeHandler(evt: any) {
    console.log(evt.target.value);
  }
  @ViewChild('custominp', { static: true }) custominput: ElementRef;
  @ViewChild('customcheck1', { static: true }) custominput1: ElementRef;
  @ViewChild('customcheck2', { static: true }) custominput2: ElementRef;
  @ViewChild('customcheck3', { static: true }) custominput3: ElementRef;

  incCustom(val: string) {
    console.log(val);
    console.log(this.custominput.nativeElement.value);
    this.custominput.nativeElement.value =
      +this.custominput.nativeElement.value + 1;

    this.isShowCon = !this.isShowCon;
  }
  isShowCon = true;

  changeStatus(event: Event, type: string) {
    switch (type) {
      case 'one':
        this.custominput2.nativeElement.checked = false;
        this.custominput3.nativeElement.checked = false;
        break;
      case 'two':
        this.custominput1.nativeElement.checked = false;
        this.custominput3.nativeElement.checked = false;
        break;
      case 'three':
        this.custominput1.nativeElement.checked = false;
        this.custominput2.nativeElement.checked = false;
        break;
    }
    console.log(event.target);
    console.log(this.custominput1.nativeElement.checked);
    //  const isChecked = (<HTMLInputElement>event.target).checked;
    //console.log(isChecked);
  }
  history: any[] = [];
  update: {} = {};
  updateRepo(dir: any, msg: any) {
    this.history.push({
      name: dir,
      isFile: dir.includes('.'),
      time: new Date(),
    });
    this.update = { name: dir, msg, history: this.history };
  }
}
