/* eslint-env mocha */

import assert from 'assert';
import { SonicDate } from 'src/index';
import { differenceInMs } from 'src/methods';

describe(differenceInMs.name, () => {
	it('returns the millisecond difference between the given dates (no flooring)', () => {
		const result = new SonicDate(
			2014,
			8 /* Sep */,
			5,
			0,
			0,
			0,
			500,
		).differenceInMs(new SonicDate(2014, 8 /* Sep */, 5, 0, 0, 0, 0));
		assert(result === 500);
	});

	it('returns a negative millisecond difference when appropriate', () => {
		const result = new SonicDate(
			2014,
			8 /* Sep */,
			5,
			0,
			0,
			0,
			0,
		).differenceInMs(new SonicDate(2014, 8 /* Sep */, 5, 0, 0, 0, 500));
		assert(result === -500);
	});

	it('returns NaN if either date is `Invalid Date`', () => {
		const a = new SonicDate(NaN);
		const b = new SonicDate(2014, 8 /* Sep */, 5);
		assert(isNaN(a.differenceInMs(b)));
		assert(isNaN(b.differenceInMs(new SonicDate(NaN))));
	});
});
