import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../models/member.model';
import { MemberService } from '../services/member.service';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {

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
      this.currentMember = new Member (memberObservable.firstName, memberObservable.lastName, memberObservable.phoneNumber, memberObservable.$key);
    });
  }

  updateMember(newFirstName: string, newLastName: string, newPhone: string): void {
    let editedMember: Member = new Member(newFirstName, newLastName, newPhone, this.currentMemberId);
    this.memberService.updateMember(editedMember);
    this.router.navigate(['members/' + this.currentMemberId]);
  }
}
