import assert from 'assert';
import { SonicDate } from 'src/index';
import { differenceInHours } from 'src/methods';

describe(differenceInHours.name, () => {
	it('returns the number of full hours between the given dates', () => {
		const result = new SonicDate(2014, 8 /* Sep */, 5, 2, 30).differenceInHours(
			new SonicDate(2014, 8 /* Sep */, 4, 23, 0),
		);
		// 3.5 hours -> 3 full hours
		assert(result === 3);
	});

	it('returns a negative number if the time value of the first date is smaller', () => {
		const result = new SonicDate(2014, 8 /* Sep */, 4, 23, 0).differenceInHours(
			new SonicDate(2014, 8 /* Sep */, 5, 2, 30),
		);
		assert(result === -3);
	});

	it('the difference is less than an hour but across calendar hours', () => {
		const result = new SonicDate(2014, 8 /* Sep */, 5, 0, 30).differenceInHours(
			new SonicDate(2014, 8 /* Sep */, 4, 23, 45),
		);
		// 0.75 hours -> 0 full hours
		assert(result === 0);
	});

	it('returns NaN if either date is `Invalid Date`', () => {
		const a = new SonicDate(NaN);
		const b = new SonicDate(2014, 8 /* Sep */, 5);
		assert(isNaN(a.differenceInHours(b)));
		assert(isNaN(b.differenceInHours(new SonicDate(NaN))));
	});
});
