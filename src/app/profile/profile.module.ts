import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BoredComponent } from './bored/bored.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BoredModule } from './bored/bored.module';
import { CaseStudyComponent } from './case-study/case-study.component';
import { BanyanBrainCaseStudyComponent } from './banyan-brain-case-study/banyan-brain-case-study.component';
import { EdzagCaseStudyComponent } from './edzag-case-study/edzag-case-study.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    ProfileRoutingModule,
    BoredModule
  ],
  declarations: [
    ProfileComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    ProjectsComponent,
    BoredComponent,
    NotfoundComponent,
    CaseStudyComponent,
    BanyanBrainCaseStudyComponent,
    EdzagCaseStudyComponent,
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class ProfileModule { }
