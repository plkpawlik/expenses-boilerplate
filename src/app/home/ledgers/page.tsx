"use client";

// @node
import { useEffect } from "react";

// @root
import { ViewHome } from "@/components/view/view.home";
import { useLedgersContext } from "@/contexts/ledgers";

// @view
import { Button } from "./page.button";
import { Preview } from "./page.preview";
import { Summary } from "./page.summary";

export default function () {
	// component hooks
	const ledgers = useLedgersContext();

	// component logic
	useEffect(() => {
		ledgers.load();
	}, []);

	// component layout
	return (
		<ViewHome className="flex flex-col items-stretch">
			<Summary bills={ledgers.list} />
			<Preview bills={ledgers.list} />
			<Button />
		</ViewHome>
	);
}
