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
		return brewMethods[currentBrewMethod].steps.map((step, i) => {
			const timeInSeconds = i * 45;
			const minutes = Math.floor(timeInSeconds / 60);
			const seconds = timeInSeconds % 60;
			const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

			return {
				description: step.description,
				amount: Math.round(step.suggestedRatio * totalWater),
				time: formattedTime,
			};
		});
	};

	const handleCalculatePours = () => {
		const totalWater = calculateTotalWater(coffeeWeight, coffeeWaterRatio);
		const calculatedPours = calculatePours(currentBrewMethod, coffeeWaterRatio, coffeeWeight, totalWater);

		setPours(calculatedPours);
	};

	return (
		<>
			<div className="flex flex-col gap-8">
				<div className="flex flex-col">
					<label className="mb-2 text-sm font-bold">Pourover Method</label>
					<select className="rounded-lg border-2 border-violet-400" value={currentBrewMethod} onChange={(e) => setCurrentBrewMethod(Number(e.target.value))}>
						{brewMethods.map((method, index) => (
							<option value={index} key={index}>
								{method.name}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-col">
					<label className="mb-2 text-sm font-bold">
						Coffee Weight <span className="text-xs">(grams)</span>
					</label>
					<input
						className="rounded-lg border-2 border-violet-400"
						type="number"
						value={coffeeWeight}
						onChange={(e) => setCoffeeWeight(Number(e.target.value))}
						placeholder="Amount of coffee in grams"
					/>
				</div>
				<div className="flex flex-col">
					<label className="mb-2 text-sm font-bold">Ratio</label>

					<div className="flex">
						<input
							className="rounded-bl-lg rounded-tl-lg border-b-2 border-l-2 border-r-0 border-t-2 border-violet-400 disabled:bg-slate-200"
							type="number"
							value={1}
							placeholder="Brew ratio"
							disabled
						/>
						<input
							className="rounded-br-lg rounded-tr-lg border-b-2 border-l-0 border-r-2 border-t-2 border-violet-400"
							type="number"
							value={coffeeWaterRatio}
							onChange={(e) => setCoffeeWaterRatio(Number(e.target.value))}
							placeholder="Brew ratio"
						/>
					</div>
				</div>
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
