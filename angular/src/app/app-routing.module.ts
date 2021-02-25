import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './bai7_service_&_router/timelines/timelines.component';
import {YoutubePlaylistComponent} from './bai7_service_&_router/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './bai7_service_&_router/youtube-player/youtube-player.component';


const routes: Routes = [
  {path: 'timelines', component: TimelinesComponent},
  {path: 'youtube', component: YoutubePlaylistComponent},
  {path: 'youtube/:id', component: YoutubePlayerComponent},
  // {path: 'youtube',
  //   component: YoutubePlaylistComponent,
  //   children: [{
  //     path: ':id',
  //     component: YoutubePlayerComponent
  //   }]}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
  // imports: [RouterModule.forRoot(routes, {
  //   preloadingStrategy: PreloadAllModules
  // })],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
