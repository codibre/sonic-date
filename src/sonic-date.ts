import * as methods from './methods';

export type Dateable = Date | number | string;

export class SonicDate extends Date {
	static get Now() {
		return new SonicDate();
	}
}
export interface SonicDate {
	/**
	 * Create a new `SonicDate` instance with the same time value.
	 * @returns A cloned `SonicDate`.
	 */
	clone(): SonicDate;

	/**
	 * Returns true if this date is after the given date.
	 * @param dateToCompare - Date, timestamp or ISO string to compare against.
	 * @returns `true` when this date > `dateToCompare`.
	 */
	isAfter(dateToCompare: Dateable): boolean;

	/**
	 * Returns true if this date is before the given date.
	 * @param dateToCompare - Date, timestamp or ISO string to compare against.
	 * @returns `true` when this date < `dateToCompare`.
	 */
	isBefore(dateToCompare: Dateable): boolean;

	/**
	 * Add milliseconds to this date (mutates) and return `this`.
	 * @param amount - Milliseconds to add (may be negative).
	 * @returns The mutated `SonicDate` instance.
	 */
	addMilliseconds(amount: number): this;

	/**
	 * Add seconds to this date (mutates) and return `this`.
	 * @param amount - Seconds to add (may be negative).
	 * @returns The mutated `SonicDate` instance.
	 */
	addSeconds(amount: number): this;

	/**
	 * Add minutes to this date (mutates) and return `this`.
	 * @param amount - Minutes to add (may be negative).
	 * @returns The mutated `SonicDate` instance.
	 */
	addMinutes(amount: number): this;

	/**
	 * Add hours to this date (mutates) and return `this`.
	 * @param amount - Hours to add (may be negative).
	 * @returns The mutated `SonicDate` instance.
	 */
	addHours(amount: number): this;

	/**
	 * Add days to this date (mutates) and return `this`.
	 * @param amount - Days to add (may be negative).
	 * @returns The mutated `SonicDate` instance.
	 */
	addDays(amount: number): this;

	/**
	 * Add months to this date (mutates) and return `this`.
	 * @param amount - Months to add (may be negative).
	 * @returns The mutated `SonicDate` instance.
	 */
	addMonths(amount: number): this;

	/**
	 * Add years to this date (mutates) and return `this`.
	 * @param amount - Years to add (may be negative).
	 * @returns The mutated `SonicDate` instance.
	 */
	addYears(amount: number): this;

	/**
	 * Set time to the start of the day (00:00:00.000) and return `this`.
	 * @returns The mutated `SonicDate` instance set to local start of day.
	 */
	startOfDay(): this;

	/**
	 * Get the minutes elapsed since local midnight (0-1439).
	 * @returns Number of minutes from midnight.
	 */
	minutesFromMidnight(): number;

	/**
	 * Get the number of full minutes between this date and `dateRight`.
	 * @param dateRight - Date, timestamp or ISO string to compare against.
	 * @returns Floor of minutes difference (this - dateRight).
	 */
	differenceInMinutes(dateRight: Dateable): number;

	/**
	 * Get the number of full hours between this date and `dateRight`.
	 * @param dateRight - Date, timestamp or ISO string to compare against.
	 * @returns Floor of hours difference (this - dateRight).
	 */
	differenceInHours(dateRight: Dateable): number;

	/**
	 * Get the number of full seconds between this date and `dateRight`.
	 * @param dateRight - Date, timestamp or ISO string to compare against.
	 * @returns Floor of seconds difference (this - dateRight).
	 */
	differenceInSeconds(dateRight: Dateable): number;

	/**
	 * Get the difference in milliseconds between this date and `dateRight`.
	 * @param dateRight - Date, timestamp or ISO string to compare against.
	 * @returns Milliseconds difference (this - dateRight).
	 */
	differenceInMs(dateRight: Dateable): number;

	/**
	 * Get the number of full calendar days between this date and `dateRight`.
	 * @param dateRight - Date, timestamp or ISO string to compare against.
	 * @returns Number of full days difference.
	 */
	differenceInDays(dateRight: Dateable): number;

	/**
	 * Get the number of full years between this date and `dateRight`.
	 * @param dateRight - Date, timestamp or ISO string to compare against.
	 * @returns Number of full years difference.
	 */
	differenceInYears(dateRight: Dateable): number;

	/**
	 * Return an ISO date string in `YYYY-MM-DD` format.
	 * @returns ISO date string (date portion only).
	 */
	toISODateString(): string;

	/**
	 * Return the epoch milliseconds adjusted to local UTC time.
	 * This is equivalent to `getTime() - getTimezoneOffset() * 60000`.
	 * @returns UTC-equivalent timestamp in milliseconds.
	 */
	utcTime(): number;
}

(Object.keys(methods) as Array<keyof typeof methods>).forEach((method) => {
	(SonicDate.prototype[
		method
	] as unknown as (typeof SonicDate.prototype)[typeof method]) =
		methods[method];
});
