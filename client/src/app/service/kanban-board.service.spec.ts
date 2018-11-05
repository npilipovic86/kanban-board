/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KanbanBoardService } from './kanban-board.service';

describe('Service: KanbanBoard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KanbanBoardService]
    });
  });

  it('should ...', inject([KanbanBoardService], (service: KanbanBoardService) => {
    expect(service).toBeTruthy();
  }));
});
