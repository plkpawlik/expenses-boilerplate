import { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
	title: "Create Next App",
};

export default function (props: React.PropsWithChildren) {
	return (
		<html lang="en" data-theme="emerald">
			<body className="h-screen w-screen overflow-hidden">{props.children}</body>
		</html>
	);
}
