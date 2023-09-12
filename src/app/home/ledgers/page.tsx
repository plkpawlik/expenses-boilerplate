"use client";

import { useLedgersContext } from "@/contexts/ledgers";
import { ViewHome } from "@/widgets/view/view.home";
import { Button } from "./page.button";
import { Preview } from "./page.preview";
import { Summary } from "./page.summary";

export default function () {
	// component hooks
	const ledgers = useLedgersContext();

	// component logic

	// component layout
	return (
		<ViewHome className="flex flex-col items-stretch">
			<Summary bills={ledgers.list} />
			<Preview bills={ledgers.list} />
			<Button />
		</ViewHome>
	);
}
