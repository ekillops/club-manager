import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  currentMember: FirebaseObjectObservable<any>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ){}

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.currentMemberId = urlParametersArray['id'];
    });
    this.currentMember = this.memberService.getMemberById(this.currentMemberId);
  }

}
