import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';
import { VideosComponent } from '../videos/videos.component';
import { ArticlesComponent } from '../articles/articles.component';
import { JokesComponent } from '../jokes/jokes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GamesComponent, VideosComponent, ArticlesComponent, JokesComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RouterModule ],
})
export class BoredModule { }
