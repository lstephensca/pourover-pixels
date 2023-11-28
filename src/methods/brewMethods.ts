import { BrewMethod } from "@/types/brewing";

const brewMethods: BrewMethod[] = [
	{
		name: "Tetsu Kasuya Standard",
		steps: [
			{
				description: "1st Pour",
				amount: (baseRatio, coffeeGrams, totalWater) => totalWater * 0.4 * 0.5,
			},
			{
				description: "2nd Pour",
				amount: (baseRatio, coffeeGrams, totalWater) => totalWater * 0.4 * 0.5,
			},
			{
				description: "3rd Pour",
				amount: (baseRatio, coffeeGrams, totalWater) => totalWater * 0.6,
			},
		],
	},
	{
		name: "Tetsu Kasuya Brighter",
		steps: [
			{
				description: "1st Pour",
				amount: (baseRatio, coffeeGrams, totalWater) => totalWater * 0.4 * 0.6,
			},
			{
				description: "2nd Pour",
				amount: (baseRatio, coffeeGrams, totalWater) => totalWater * 0.4 * 0.4,
			},
			{
				description: "3rd Pour",
				amount: (baseRatio, coffeeGrams, totalWater) => totalWater * 0.6,
			},
		],
	},
	{
		name: "Tetsu Kasuya Sweeter",
		steps: [
			{
				description: "1st Pour",
				amount: (baseRatio, coffeeGrams, totalWater) => totalWater * 0.4 * 0.4,
			},
			{
				description: "2nd Pour",
				amount: (baseRatio, coffeeGrams, totalWater) => totalWater * 0.4 * 0.6,
			},
			{
				description: "3rd Pour",
				amount: (baseRatio, coffeeGrams, totalWater) => totalWater * 0.6,
			},
		],
	},
];

export default brewMethods;
