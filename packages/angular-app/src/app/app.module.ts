import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NxWelcomeComponent } from './nx-welcome.component';

import { CoreComponentsAngularModule } from '@space-tourism/core-components-angular';
import { defineCustomElements } from '@space-tourism/core-components/loader';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LandingModule } from './modules/landing/landing.module';

defineCustomElements();

@NgModule({
	declarations: [AppComponent, NxWelcomeComponent],
	imports: [
		BrowserModule,
		CoreComponentsAngularModule,
		AppRoutingModule,
		RouterModule,
		LandingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
