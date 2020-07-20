 import { Component } from '@angular/core';
 import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agro-cropes-web-app';
  description = 'Agro-Cropes'

  itemValue = '';
  items : Observable<any[]>;

  constructor(public router: Router, public db: AngularFireDatabase){
    this.items = db.list('items').valueChanges();
  }

  onSubmit(){
    this.db.list('items').push({content:this.itemValue});
    this.itemValue = '';
  }
}
