import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
	selector: 'space-tourism-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-app';

	currentRoute: string = '/';

	constructor(private router: Router) {
		this.router.events
			.pipe(
				filter((r) => r instanceof NavigationEnd),
				map((r) => (r as NavigationEnd).url)
			)
			.subscribe((route) => {
				this.currentRoute = route;
			});
	}

	onClickLogo({ detail }: any) {
		if (this.currentRoute === detail) return;

		this.currentRoute = detail;

		this.router.navigate([this.currentRoute]).catch((e) => {
			console.log(e);
		});
	}
}
