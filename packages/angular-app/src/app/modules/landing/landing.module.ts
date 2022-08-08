import { NgModule } from '@angular/core';
import { CoreComponentsAngularModule } from '@space-tourism/core-components-angular';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
	imports: [CoreComponentsAngularModule],
	exports: [],
	declarations: [HomeComponent],
	providers: [],
	schemas: [],
})
export class LandingModule {}
