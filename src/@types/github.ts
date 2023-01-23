interface ContributonDays {
	weekday: number;
	date: Date;
	contributionCount: number;
	color: string;
	contributionLevel:
		| 'NONE'
		| 'FIRST_QUARTILE'
		| 'SECOND_QUARTILE'
		| 'THIRD_QUARTILE'
		| 'FOURTH_QUARTILE';
}

interface GithubWeek {
	contributionDays: ContributonDays[];
}

interface GithubMonths {
	name: string;
	year: number;
	firstDay: string;
	totalWeeks: number;
}

interface GithubUser {
	user: {
		contributionsCollection: {
			contributionCalendar: {
				totalContributions: number;
				weeks: GithubWeek[];
				months: GithubMonths[];
			};
		};
	};
}

export default GithubUser;
