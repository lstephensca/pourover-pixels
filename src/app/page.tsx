import Link from "next/link";

import getGreeting from "@/utils/getGreeting";

export default function Home() {
	const greeting = getGreeting();

	return (
		<main className="flex min-h-screen items-center justify-center bg-orange-500">
			<div className="w-5/6 max-w-5xl rounded-lg bg-black lg:w-full ">
				<div className="flex -translate-x-1 -translate-y-1 flex-col gap-8 rounded-lg border-2 border-black bg-amber-400 p-8">
					<div className="flex flex-col items-center gap-4">
						<h1 className="text-4xl font-bold md:text-5xl">{greeting.greeting}</h1>
						<h1 className="text-2xl font-bold md:text-4xl">{greeting.message}</h1>
					</div>

					<button className="inline-flex self-center rounded-lg bg-black">
						<Link
							className="relative w-full -translate-x-1 -translate-y-1 rounded-lg border-2 border-black bg-violet-400 px-8 py-4 text-lg font-bold transition-all duration-200 ease-in-out hover:translate-x-0 hover:translate-y-0"
							href="/pourover-calculator"
						>
							Calculate!
							<span className="absolute inset-0"></span>
						</Link>
					</button>
				</div>
			</div>
		</main>
	);
}
