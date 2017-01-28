import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Member } from '../models/member.model';
import { MemberService } from '../services/member.service';
import { MemberLevelPipe } from '../pipes/member-level.pipe';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})
export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  filter: string = 'ALL';

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  viewMemberPage(memberIdKey:string): void {
    this.router.navigate(['members', memberIdKey]);
  }

  memberLabelColor(memberLevel: string): string {
    if (memberLevel === 'GREEN') {
      return 'label label-success';
    } else if (memberLevel === 'RED') {
      return 'label label-danger';
    } else if (memberLevel === 'GOLD') {
      return 'label label-warning';
    } else {
      return 'label label-success';
    }
  }

  changeFilter(newValue: string): void {
    this.filter = newValue;
  }

}
