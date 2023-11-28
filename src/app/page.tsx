import getGreeting from "@/utils/getGreeting";
import Image from "next/image";

export default function Home() {
	const greeting = getGreeting();

	return (
		<main className="flex min-h-screen items-center justify-center bg-orange-500 p-24">
			<div className="w-full rounded-lg bg-black md:max-w-5xl">
				<div className="flex -translate-x-1 -translate-y-1 flex-col items-center rounded-lg border-2 border-black bg-amber-400 px-8 py-8">
					<div className="flex flex-col items-center gap-4">
						<h1 className="text-5xl font-bold">{greeting.greeting}</h1>
						<h1 className="text-4xl font-bold">{greeting.message}</h1>
					</div>
				</div>
			</div>
		</main>
	);
}
