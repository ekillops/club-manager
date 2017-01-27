/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClubMemberService } from './club-member.service';

describe('ClubMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubMemberService]
    });
  });

  it('should ...', inject([ClubMemberService], (service: ClubMemberService) => {
    expect(service).toBeTruthy();
  }));
});
