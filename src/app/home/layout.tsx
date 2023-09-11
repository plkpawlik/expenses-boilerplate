import { Footer } from "./layout.footer";
import { Header } from "./layout.header";

export default function (props: React.PropsWithChildren) {
	return (
		<main className="flex h-full w-full flex-col flex-nowrap items-stretch justify-between">
			<Header />
			{props.children}
			<Footer />
		</main>
	);
}
