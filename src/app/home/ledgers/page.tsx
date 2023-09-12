"use client";

import { useLedgersContext } from "@/contexts/ledgers";
import { ViewHome } from "@/widgets/view/view.home";
import { Preview } from "./page.preview";

export default function () {
	// component hooks
	const ledgers = useLedgersContext();

	// component logic

	// component layout
	return (
		<ViewHome className="flex flex-col items-stretch">
			<div className="m-2 bg-red-500 p-32" />
			<Preview bills={ledgers.list} />
		</ViewHome>
	);
}
