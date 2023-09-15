import { BillPost } from "@/types/util/bill.post";
import { format } from "date-fns";
import { MdPerson } from "react-icons/md";
import { twJoin } from "tailwind-merge";

export function PostExpense(props: { data: BillPost; order: number; userID: string }) {
	// component logic
	const formatedDate = format(props.data.timestampCreated, "yyyy-MM-dd HH:mm");

	// component layout
	return (
		<div
			style={{ order: -props.order }}
			className={twJoin(
				"chat",
				props.data.userIDBelongsTo !== props.userID && "chat-start",
				props.data.userIDBelongsTo === props.userID && "chat-end",
			)}
		>
			<div className="avatar btn btn-circle chat-image btn-sm">
				<MdPerson className="text-xl" />
			</div>
			<div
				className={twJoin(
					"chat-bubble",
					props.data.userIDBelongsTo !== props.userID && "chat-bubble-secondary",
					props.data.userIDBelongsTo === props.userID &&
						"chat-bubble-primary text-base-100",
				)}
			>
				{props.data.post.expenseName}
			</div>
			<div className="chat-footer opacity-50">
				<time className="text-xs opacity-50">{formatedDate}</time>
			</div>
		</div>
	);
}
