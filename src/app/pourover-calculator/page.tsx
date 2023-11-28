import CalculatePourover from "@/components/PouroverCalculator";

const PouroverCalculator = () => {
	return (
		<main className="flex min-h-screen items-center justify-center bg-emerald-500">
			<div className="w-5/6 max-w-5xl rounded-lg bg-black lg:w-full ">
				<div className="flex -translate-x-1 -translate-y-1 flex-col gap-8 rounded-lg border-2 border-black bg-teal-400 p-8">
					<CalculatePourover />
				</div>
			</div>
		</main>
	);
};

export default PouroverCalculator;
