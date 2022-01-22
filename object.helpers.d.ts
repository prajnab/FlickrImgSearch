export {};
declare global {
	interface Console {
		// Added index signature. It helps with accessing console like console[type]
		[key: string]: any;
	}

	interface Object {
		consoleErr(...arg: any[]): void;
		consoleLog(...arg: any[]): void;
		consoleWarn(...arg: any[]): void;
	}
}
