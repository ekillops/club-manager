import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../models/member.model';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [MemberService]
})

export class NewMemberComponent implements OnInit {

  selectedLevel: string = 'GREEN';

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {

  }

  createMember(inputFirstName: string, inputLastName: string, inputPhone: string): void {
    let newMember: Member = new Member(inputFirstName, inputLastName, inputPhone, this.selectedLevel);

    this.memberService.addMember(newMember);

    this.router.navigate(['members']);
  }

  setLevel(inputLevel: string): void {
    this.selectedLevel = inputLevel;
  }
}
