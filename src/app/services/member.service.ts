import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Member } from '../models/member.model';

@Injectable()

export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.members = af.database.list('members');
  }

  getMembers(): FirebaseListObservable<any[]> {
    return this.members;
  }

  getMemberById(searchId: string): FirebaseObjectObservable<any> {
    return this.af.database.object('members/' + searchId);
  }

  addMember(newMember: Member): void {
    this.members.push(newMember);
  }

}
