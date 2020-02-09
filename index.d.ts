/**
 * Logging defaults for status updates.
 */

declare namespace statusReporters {

	interface Options {
		readonly fullMessage: string;
	}

	interface Logger {
		(): void;
	}

}

declare type SingleReporter = statusReporters.Options & statusReporters.Logger;

declare const allReporters: {
	readonly success: (message: string, ...extra: any[]) => SingleReporter;
	readonly error: (message: string, ...extra: any[]) => SingleReporter;
	readonly warn: (message: string, ...extra: any[]) => SingleReporter;
	readonly info: (message: string, ...extra: any[]) => SingleReporter;
}

export = allReporters;
