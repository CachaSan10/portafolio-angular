import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'technology', component: TechnologyComponent},
    {path:'project', component: ProjectComponent},
    {path: '', redirectTo: '/about', pathMatch: 'full'},
];
