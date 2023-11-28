import { BrewMethod } from "@/types/brewing";

const brewMethods: BrewMethod[] = [
	{
		name: "V60 - Standard",
		steps: [
			{
				description: "1st Pour (steep)",
				suggestedRatio: 0.2,
			},
			{
				description: "2nd Pour",
				suggestedRatio: 0.2,
			},
			{
				description: "3rd Pour",
				suggestedRatio: 0.2,
			},
			{
				description: "4th Pour",
				suggestedRatio: 0.2,
			},
			{
				description: "5th Pour",
				suggestedRatio: 0.2,
			},
		],
	},
	{
		name: "Tetsu Kasuya - Standard",
		steps: [
			{
				description: "1st Pour (steep)",
				suggestedRatio: 0.4 * 0.5,
			},
			{
				description: "2nd Pour",
				suggestedRatio: 0.4 * 0.5,
			},
			{
				description: "3rd Pour",
				suggestedRatio: 0.6,
			},
		],
	},
	{
		name: "Tetsu Kasuya - Brighter",
		steps: [
			{
				description: "1st Pour (steep)",
				suggestedRatio: 0.4 * 0.6,
			},
			{
				description: "2nd Pour",
				suggestedRatio: 0.4 * 0.4,
			},
			{
				description: "3rd Pour",
				suggestedRatio: 0.6,
			},
		],
	},
	{
		name: "Tetsu Kasuya - Sweeter",
		steps: [
			{
				description: "1st Pour (steep)",
				suggestedRatio: 0.4 * 0.4,
			},
			{
				description: "2nd Pour",
				suggestedRatio: 0.4 * 0.6,
			},
			{
				description: "3rd Pour",
				suggestedRatio: 0.6,
			},
		],
	},
];

export default brewMethods;
