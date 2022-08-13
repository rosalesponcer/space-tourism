import { NgModule } from '@angular/core';
import { CoreComponentsAngularModule } from '@space-tourism/core-components-angular';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';

@NgModule({
	imports: [CoreComponentsAngularModule],
	exports: [],
	declarations: [
		HomeComponent,
		DestinationComponent,
		CrewComponent,
		TechnologyComponent,
	],
	providers: [],
	schemas: [],
})
export class LandingModule {}
