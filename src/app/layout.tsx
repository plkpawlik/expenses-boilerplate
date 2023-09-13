// @next
import { Metadata } from "next";

// @style
import "./layout.css";

export const metadata: Metadata = {
	title: "Create Next App",
};

export default function (props: React.PropsWithChildren) {
	// component logic

	// component layout
	return (
		<html lang="en" data-theme="emerald">
			<body className="h-screen w-screen overflow-hidden">{props.children}</body>
		</html>
	);
}
