import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// https://www.positronx.io/full-angular-7-firebase-authentication-system/
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {

  games: Observable<any[]>;

  
  constructor(fireStore: AngularFirestore) {



    //fireStore.list('/books');
    
    this.games = fireStore.collection('Games').valueChanges();
   }

  ngOnInit(): void {
    this.games.subscribe(item => {
      console.log('item ->', item)
    })
  }

}
