import { TestBed } from '@angular/core/testing';

import { SendCommentService } from './send-comment.service';

describe('SendCommentService', () => {
  let service: SendCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
