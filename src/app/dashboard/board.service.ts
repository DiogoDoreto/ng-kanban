import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from './board.model';

export interface GetResponse {
  data: Board[];
  offset: number;
  limit: number;
  total: number;
}

@Injectable()
export class BoardService {
  private url = '//rem-rest-api.herokuapp.com/api/board/';
  private options = { withCredentials: true };

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<GetResponse>(this.url, this.options);
  }

  add(board: Partial<Board>) {
    return this.http.post<Board>(this.url, board, this.options);
  }

  update(board: Board) {
    return this.http.put<Board>(this.url + board.id, board);
  }

  delete(board: Board) {
    return this.http.delete(this.url + board.id);
  }
}
