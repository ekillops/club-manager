import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { NewMemberComponent } from './new-member/new-member.component';


const appRoutes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members',
    component: MemberListComponent
  },
  {
    path: 'members/new',
    component: NewMemberComponent
  },
  {
    path: 'members/:id',
    component: MemberProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
