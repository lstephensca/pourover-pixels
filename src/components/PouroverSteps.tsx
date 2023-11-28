import { Pour } from "@/types/brewing";

interface PouroverStepsProps {
	pours: Pour[];
}

const PouroverSteps = ({ pours }: PouroverStepsProps) => {
	return (
		<div className="rounded-lg border-2 border-black bg-teal-300 p-8">
			<h2 className="mb-4 text-3xl font-bold">Steps to a so-so brew...</h2>
			<table className="w-full table-auto border-collapse text-sm">
				<thead>
					<tr>
						<th className="border-b border-violet-400 p-4 text-left font-medium">Step</th>
						<th className="border-b border-violet-400 p-4 text-left font-medium">Amount</th>
						<th className="border-b border-violet-400 p-4 text-left font-medium">Time</th>
					</tr>
				</thead>
				<tbody>
					{pours.map((pour, index) => (
						<tr key={index}>
							<td className="border-b border-violet-400 p-4">{pour.description}</td>
							<td className="border-b border-violet-400 p-4">{pour.amount}g</td>
							<td className="border-b border-violet-400 p-4">{pour.time} seconds</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default PouroverSteps;
