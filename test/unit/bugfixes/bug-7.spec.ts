import { SonicDate } from 'src/sonic-date';

describe('incorrect calc', () => {
	it('2025-01-10T09:10:00Z - 25 years - 1 month should be 25 years ago', () => {
		const date = new SonicDate('2025-01-10T09:10:00Z');

		const result = date
			.addYears(-25)
			.addMonths(-1)
			.differenceInYears(new SonicDate('2025-01-10T09:10:00Z'));

		expect(result).toBe(25);
	});
});
