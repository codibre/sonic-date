import { scales } from './constants';

export function differenceInSeconds<T extends Date, R extends Date>(
	this: T,
	start: R,
) {
	return Math.trunc((this.getTime() - start.getTime()) / scales.addSeconds);
}
