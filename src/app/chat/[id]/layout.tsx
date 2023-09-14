"use client";

// @node
import { useEffect } from "react";

// @root
import { useBillContext } from "@/contexts/bill";

// @view
import { Loader } from "./layout.loading";

export default function (
	props: React.PropsWithChildren & {
		params: { id: string };
	},
) {
	// component hooks
	const billCtx = useBillContext();

	// component logic
	useEffect(() => {
		billCtx.load("chat1");
	}, [props.params.id]);

	// component loader
	if (billCtx.billData === null) return <Loader />;
	if (billCtx.billInfo === null) return <Loader />;

	// component layout
	return props.children;
}
