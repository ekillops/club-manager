import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../models/member.model';
import { MemberService } from '../services/member.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  providers: [MemberService]
})

export class MemberProfileComponent implements OnInit {

  currentMemberId: string;
  currentMember: Member;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.currentMemberId = urlParametersArray['id'];
    });
    this.memberService.getMemberById(this.currentMemberId).subscribe((memberObservable) => {
      this.currentMember = new Member(memberObservable.firstName, memberObservable.lastName, memberObservable.phoneNumber, memberObservable.level,  memberObservable.id);
    });
  }

  deleteMember(): void {
    this.memberService.deleteMember(this.currentMember.id);
    this.router.navigate(['members']);
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

}
