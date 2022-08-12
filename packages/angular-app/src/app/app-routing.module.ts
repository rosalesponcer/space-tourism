import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './modules/landing/pages/destination/destination.component';
import { HomeComponent } from './modules/landing/pages/home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'destination',
		component: DestinationComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
