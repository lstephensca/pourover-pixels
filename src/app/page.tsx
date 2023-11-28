import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-orange-500 p-24">
			<div className=" w-full max-w-5xl rounded-md bg-black">
				<div className="flex -translate-x-1 -translate-y-1 flex-col items-center rounded-md border-2 border-black bg-orange-300 px-8 py-8">
					<h1 className="text-5xl font-bold">Pourover Pixels</h1>
				</div>
			</div>
		</main>
	);
}
