import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { StartComponent } from './start/start.component';
import { MaplistComponent } from './maplist/maplist.component';
import { ContactComponent } from './contact/contact.component';
import { AddpointComponent } from './addpoint/addpoint.component';
import { MapService } from './services/map.service';

import { AgmCoreModule } from '@agm/core';
import { PointComponent } from './point/point.component';
import { EditpointComponent } from './editpoint/editpoint.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path:'', component: StartComponent},
  {path:'maplist', component: MaplistComponent},
  {path:'addpoint', component: AddpointComponent},
  {path:'editpoint', component: EditpointComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    StartComponent,
    MaplistComponent,
    ContactComponent,
    AddpointComponent,
    PointComponent,
    EditpointComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRY0189jLAaawywZlIEPjAh3S8dDny6IM'
    })
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
