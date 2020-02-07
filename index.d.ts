/**
 * Logging defaults for status updates.
 * 
 */
declare const statusReports: {
	readonly success: (message: string, ...extra: any[]) => void;
	readonly error: (message: string, ...extra: any[]) => void;
	readonly warn: (message: string, ...extra: any[]) => void;
	readonly info: (message: string, ...extra: any[]) => void;
}

export = statusReports;
