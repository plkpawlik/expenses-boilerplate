import { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
	title: "Create Next App",
};

export default function RootLayout(props: React.PropsWithChildren) {
	return (
		<html lang="en" data-theme="emerald">
			<body className="w-screen h-screen overflow-hidden">{props.children}</body>
		</html>
	);
}
