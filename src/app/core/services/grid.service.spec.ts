import { TestBed } from '@angular/core/testing';

import { GridService } from './grid.service';

describe('GridService', () => {
  let service: GridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be returned an array with size 10', () => {
    expect(service.createNewArray(10,null).length).toBe(10);
  });
});
