export type BrewStep = {
	description: string;
	amount: (baseRatio: number, coffeeGrams: number, totalWater: number) => number;
};

export type BrewMethod = {
	name: string;
	steps: BrewStep[];
};

export interface Pour {
	description: string;
	amount: number;
	time: number;
}
