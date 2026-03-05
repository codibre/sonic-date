/* eslint-env mocha */

import assert from 'assert';
import { SonicDate } from 'src/index';
import { differenceInSeconds } from 'src/methods';

describe(differenceInSeconds.name, () => {
	it('returns the number of full seconds between the given dates', () => {
		const result = new SonicDate(
			2014,
			8 /* Sep */,
			5,
			0,
			0,
			30,
		).differenceInSeconds(new SonicDate(2014, 8 /* Sep */, 5, 0, 0, 0));
		// 30 seconds -> 30 full seconds
		assert(result === 30);
	});

	it('returns a negative number if the time value of the first date is smaller', () => {
		const result = new SonicDate(
			2014,
			8 /* Sep */,
			5,
			0,
			0,
			0,
		).differenceInSeconds(new SonicDate(2014, 8 /* Sep */, 5, 0, 0, 30));
		assert(result === -30);
	});

	it('the difference less than a second returns 0', () => {
		const result = new SonicDate(
			2014,
			8 /* Sep */,
			5,
			0,
			0,
			0,
			500,
		).differenceInSeconds(new SonicDate(2014, 8 /* Sep */, 5, 0, 0, 0));
		// 0.5 seconds -> 0 full seconds
		assert(result === 0);
	});

	it('returns NaN if either date is `Invalid Date`', () => {
		const a = new SonicDate(NaN);
		const b = new SonicDate(2014, 8 /* Sep */, 5);
		assert(isNaN(a.differenceInSeconds(b)));
		assert(isNaN(b.differenceInSeconds(new SonicDate(NaN))));
	});
});
