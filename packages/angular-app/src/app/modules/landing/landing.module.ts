import { NgModule } from '@angular/core';
import { CoreComponentsAngularModule } from '@space-tourism/core-components-angular';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';

@NgModule({
	imports: [CoreComponentsAngularModule],
	exports: [],
	declarations: [HomeComponent, DestinationComponent],
	providers: [],
	schemas: [],
})
export class LandingModule {}
