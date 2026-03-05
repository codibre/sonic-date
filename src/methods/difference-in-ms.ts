export function differenceInMs<T extends Date, R extends Date>(
	this: T,
	start: R,
) {
	return this.getTime() - start.getTime();
}
