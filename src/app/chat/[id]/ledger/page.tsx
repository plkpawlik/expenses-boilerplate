"use client";

// @root
import { PostExpense } from "@/components/post/post.expense";
import { ViewChat } from "@/components/view/view.chat";
import { useBillContext } from "@/contexts/bill";

export default function () {
	// component hooks
	const billCtx = useBillContext();

	// component logic
	if (billCtx.billData === null) return;
	if (billCtx.billInfo === null) return;

	// component layout
	return (
		<ViewChat className={"flex flex-col-reverse p-2"}>
			{billCtx.billData.posts.map((post, index) => (
				<PostExpense
					key={post.timestampCreated.toUTCString()}
					data={post}
					order={index}
					userID="user1"
				/>
			))}
		</ViewChat>
	);
}
