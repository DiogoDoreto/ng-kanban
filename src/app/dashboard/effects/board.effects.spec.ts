import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BoardEffects } from './board.effects';

describe('BoardEffects', () => {
  let actions$: Observable<any>;
  let effects: BoardEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BoardEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BoardEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
