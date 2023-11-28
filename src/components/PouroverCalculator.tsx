"use client";

import { useState } from "react";
import { Pour } from "@/types/brewing";
import brewMethods from "@/methods/brewMethods";

interface CalculatePouroverProps {}

const CalculatePourover = ({}: CalculatePouroverProps) => {
	const [coffeeWeight, setCoffeeWeight] = useState(20);
	const [coffeeWaterRatio, setCoffeeWaterRatio] = useState(15);
	const [currentBrewMethod, setCurrentBrewMethod] = useState(0);
	const [pours, setPours] = useState<Pour[]>([]);

	const calculateTotalWater = (coffeeWeight: number, coffeeWaterRatio: number) => coffeeWeight * coffeeWaterRatio;

	const calculatePours = (currentBrewMethod: number, coffeeWaterRatio: number, coffeeWeight: number, totalWater: number) => {
		return brewMethods[currentBrewMethod].steps.map((steps, i) => ({
			description: steps.description,
			amount: steps.amount(coffeeWaterRatio, coffeeWeight, totalWater),
			time: i * 45,
		}));
	};

	const handleCalculatePours = () => {
		const totalWater = calculateTotalWater(coffeeWeight, coffeeWaterRatio);
		const calculatedPours = calculatePours(currentBrewMethod, coffeeWaterRatio, coffeeWeight, totalWater);

		setPours(calculatedPours);
	};

	return (
		<>
			<div className="flex flex-col gap-8">
				<select className="rounded-lg border-violet-400" value={currentBrewMethod} onChange={(e) => setCurrentBrewMethod(Number(e.target.value))}>
					{brewMethods.map((method, index) => (
						<option value={index} key={index}>
							{method.name}
						</option>
					))}
				</select>
				<input
					className="rounded-lg border-violet-400"
					type="number"
					value={coffeeWeight}
					onChange={(e) => setCoffeeWeight(Number(e.target.value))}
					placeholder="Amount of coffee in grams"
				/>
				<input
					className="rounded-lg border-violet-400"
					type="number"
					value={coffeeWaterRatio}
					onChange={(e) => setCoffeeWaterRatio(Number(e.target.value))}
					placeholder="Brew ratio"
				/>
				<button className="inline-flex self-center rounded-lg bg-black" onClick={handleCalculatePours}>
					<div className="elative w-full -translate-x-1 -translate-y-1 rounded-lg border-2 border-black bg-violet-400 px-8 py-4 text-lg font-bold transition-all duration-200 ease-in-out hover:translate-x-0 hover:translate-y-0">
						Calculate
					</div>
				</button>
			</div>

			{pours.length > 0 && (
				<div className="rounded-lg border-2 border-black bg-teal-300 p-8">
					<h2 className="mb-4 text-3xl font-bold">Steps to a so-so brew...</h2>
					<ul className="flex flex-col gap-2 text-xl ">
						{pours.map((pour, index) => (
							<li key={index}>
								<span className="font-bold">{pour.description}</span>: {pour.amount}g at {pour.time} seconds
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};
export default CalculatePourover;
