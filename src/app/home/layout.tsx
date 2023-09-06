import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";

export default function (props: React.PropsWithChildren) {
	// component logic

	// component layout
	return (
		<main className="flex flex-col items-stretch justify-between w-full h-full">
			<Header />
			{props.children}
			<Footer />
		</main>
	);
}
