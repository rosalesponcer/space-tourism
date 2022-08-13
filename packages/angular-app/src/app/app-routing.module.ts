import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './modules/landing/pages/crew/crew.component';
import { DestinationComponent } from './modules/landing/pages/destination/destination.component';
import { HomeComponent } from './modules/landing/pages/home/home.component';
import { TechnologyComponent } from './modules/landing/pages/technology/technology.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'destination',
		component: DestinationComponent,
	},
	{
		path: 'crew',
		component: CrewComponent,
	},
	{
		path: 'technology',
		component: TechnologyComponent,
	},
	{
		path: '**',
		component: HomeComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
