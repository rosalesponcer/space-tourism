import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
	angularOutputTarget,
	ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
	namespace: 'core-components',
	taskQueue: 'async',
	plugins: [sass()],
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader',
		},
		{
			type: 'dist-custom-elements',
		},
		{
			type: 'docs-readme',
		},
		{
			type: 'www',
			serviceWorker: null, // disable service workers
		},

		angularOutputTarget({
			componentCorePackage: '@space-tourism/core-components',
			directivesProxyFile:
				'../../../packages/core-components-angular/src/generated/directives/proxies.ts',
			directivesArrayFile:
				'../../../packages/core-components-angular/src/generated/directives/index.ts',
			valueAccessorConfigs: angularValueAccessorBindings,
		}),
	],
	globalStyle: './src/global/styles/global.scss',
};
