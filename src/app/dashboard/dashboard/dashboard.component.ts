import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddBoard, LoadBoards } from '../actions/board.actions';
import { Board } from '../board.model';
import * as fromDashboard from '../reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  boards$: Observable<Board[]>;

  constructor(private store: Store<fromDashboard.State>) {}

  ngOnInit() {
    this.boards$ = this.store.pipe(select(fromDashboard.getBoards));
    this.store.dispatch(new LoadBoards());
  }

  addBoard(title: string) {
    this.store.dispatch(new AddBoard({ title }));
  }

  deleteBoard(board: Board) {
    console.log('TODO - delete board', board);
  }
}
