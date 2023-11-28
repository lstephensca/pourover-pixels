export type BrewStep = {
	description: string;
	suggestedRatio: number;
};

export type BrewMethod = {
	name: string;
	steps: BrewStep[];
};

export interface Pour {
	description: string;
	amount: number;
	time: string;
}
