# practicebaba

ng g c container --flat=true -s=true -t=true --skipTest=true

--sidemenu=ture

destructuring es6
two way binding parent child
https://www.youtube.com/watch?v=aYkue5z_SQU&list=PLqLR2H326bY4GoOaaxVYwdbNl9dvyWKvU&index=23

1.  <ng-template [ngIf]="issLoggedIn" [ngIfelse]="elseblock">
    <ng-template #elseblock>

2.  <div *ngIf="isLoogedin; then profile; else logout"></div>
    <ng-template #profile></ng-template>
    <ng-template #logout></ng-template>

3.  <div ngFor "let name of names">{{name}}</div> 
    is converted to below
    <ng-template ngFor let-name let-num="index" [ngForOf]='names'>
    <div>{{num}} {{name}}</div>
    <ng-template>

4 ) switch

<div [ngSwitch]="name">
<p *ngSwtchcase=" 'a' "></div>
<p *ngSwtchcase=" 'a' " ></div>
<p *ngSwtchcase=" 'a' "></div>
</div>

<div [ngSwitch]="name">
<ng-template  [ngSwitchCase]=" 'a' " > <p>Ajit</p></ng-template>
<ng-template  [ngSwitchCase]=" 'a' " > <p>Ajit</p></ng-template>
<ng-template  [ngSwitchCase]=" 'a' " > <p>Ajit</p></ng-template>
<ng-template ngSwitchDefault></ng-template>
</div>

5. ng-container -> for mutiple templete binding on element
<section\*ngFor="let-client of clients">
<p *ngIf="client.paid">{{client.name}}</p>
</section>
p tags 2 honge but ngfor div will run for all clients

<ng-container \*ngFor="let-client of clients">

<p *ngIf="client.paid">{{client.name}}</p>
</ng-containe>
ng-container doesnt come itself in dom 
but shows its data always
while ng-template shows with ngif

so to show li inside ul

<ul>
</ng-container *ngFor=" let client of clients">
<li *ngIf="clients.paid">{{{client.name}} </li>
</ng-container>

</ul>
when we dont want to add  extra div in dom

6. ngtemplate outlet
 <div *ngTemplateOutlet="brand"></div>
OR
</ng-container *ngTemplateOutlet="brand; context:{name:'ajit}"></ng-container>

<ng-template let-data let-n="name" #brand>

<p>{{n}}</p>
</ng-template >

7. send html to child component:
   <ng-content
