import { differenceInYears } from 'src/methods/difference-in-years';
import { SonicDate } from 'src/index';

describe(differenceInYears.name, () => {
	it('returns the number of full years between the given dates', () => {
		const result = new SonicDate(2011, 6 /* Jul */, 2, 6, 0).differenceInYears(
			new Date(2012, 6 /* Jul */, 2, 18, 0),
		);
		expect(result).toBe(1);
	});

	it('returns a negative number if the time value of the first date is smaller', () => {
		const result = new SonicDate(2012, 6 /* Jul */, 2, 18, 0).differenceInYears(
			new Date(2011, 6 /* Jul */, 2, 6, 0),
		);
		expect(result).toBe(-1);
	});

	it('accepts timestamps', () => {
		const result = new SonicDate(2010, 6 /* Jul */, 2).differenceInYears(
			new Date(2014, 6 /* Jul */, 2).getTime(),
		);
		expect(result).toBe(4);
	});

	describe('leap days', () => {
		it('supports past dates with right side after leap day', () => {
			const result = new SonicDate(
				2002,
				2 /* Mar */,
				1,
				0,
				0,
			).differenceInYears(new Date(2004, 1 /* Feb */, 29, 0, 0));
			expect(result).toBe(1);
		});

		it('supports past dates with right side before leap day', () => {
			const result = new SonicDate(
				2002,
				1 /* Feb */,
				28,
				0,
				0,
			).differenceInYears(new Date(2004, 1 /* Feb */, 29, 0, 0));
			expect(result).toBe(2);
		});

		it('supports future dates', () => {
			const result = new SonicDate(
				2006,
				2 /* Mar */,
				1,
				0,
				0,
			).differenceInYears(new Date(2004, 1 /* Feb */, 29, 0, 0));
			expect(result).toBe(-2);
		});

		it('supports equal dates of same year', () => {
			const result = new SonicDate(
				2004,
				1 /* Feb */,
				29,
				0,
				0,
			).differenceInYears(new Date(2004, 1 /* Feb */, 29, 0, 0));
			expect(result).toBe(0);
		});

		it('supports equal dates of different years', () => {
			const result = new SonicDate(
				2004,
				1 /* Feb */,
				29,
				0,
				0,
			).differenceInYears(new Date(2008, 1 /* Feb */, 29, 0, 0));
			expect(result).toBe(4);
		});
	});

	describe('edge cases', () => {
		it('the difference is less than a year, but the given dates are in different calendar years', () => {
			const result = new SonicDate(2014, 11 /* Dec */, 31).differenceInYears(
				new Date(2015, 0 /* Jan */, 1),
			);
			expect(result).toBe(0);
		});

		it('the difference is within days in the same month', () => {
			const result = new SonicDate(2014, 0 /* Jan */, 31).differenceInYears(
				new Date(2015, 0 /* Jan */, 1),
			);
			expect(result).toBe(0);
		});

		it('the same for the swapped dates', () => {
			const result = new SonicDate(2015, 0 /* Jan */, 1).differenceInYears(
				new Date(2014, 11 /* Dec */, 31),
			);
			expect(result).toBe(0);
		});

		it('the days and months of the given dates are the same', () => {
			const result = new SonicDate(2012, 8 /* Sep */, 5).differenceInYears(
				new Date(2014, 8 /* Sep */, 5),
			);
			expect(result).toBe(2);
		});

		it('the given dates are the same', () => {
			const result = new SonicDate(
				2014,
				8 /* Sep */,
				5,
				0,
				0,
			).differenceInYears(new Date(2014, 8 /* Sep */, 5, 0, 0));
			expect(result).toBe(0);
		});

		it('does not return -0 when the given dates are the same', () => {
			function isNegativeZero(x: number): boolean {
				return x === 0 && 1 / x < 0;
			}

			const result = new SonicDate(
				2014,
				8 /* Sep */,
				5,
				0,
				0,
			).differenceInYears(new Date(2014, 8 /* Sep */, 5, 0, 0));

			const resultIsNegative = isNegativeZero(result);
			expect(resultIsNegative).toBe(false);
		});
	});

	it('returns NaN if the first date is `Invalid Date`', () => {
		const result = new SonicDate(2017, 0 /* Jan */, 1).differenceInYears(
			new Date(NaN),
		);
		expect(isNaN(result)).toBe(true);
	});

	it('returns NaN if the second date is `Invalid Date`', () => {
		const result = new SonicDate(NaN).differenceInYears(
			new Date(2017, 0 /* Jan */, 1),
		);
		expect(isNaN(result)).toBe(true);
	});

	it('returns NaN if the both dates are `Invalid Date`', () => {
		const result = new SonicDate(NaN).differenceInYears(new Date(NaN));
		expect(isNaN(result)).toBe(true);
	});
});
