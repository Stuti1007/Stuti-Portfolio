import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ReferenceComponent } from './reference/reference.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { BoredComponent } from './bored/bored.component';
import { ArticlesComponent } from './articles/articles.component';
import { GamesComponent } from './games/games.component';
import { JokesComponent } from './jokes/jokes.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bored', component: BoredComponent},
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'jokes',
    component: JokesComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }