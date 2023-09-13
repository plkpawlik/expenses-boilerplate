// @node
import { addMonths, format, subMonths } from "date-fns";

// @icon
import { IconType } from "react-icons";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export function Stepper(props: { update(value: Date): void; value: Date }) {
	// component logic
	const goNextMonth = () => props.update(addMonths(props.value, 1));
	const goPrevMonth = () => props.update(subMonths(props.value, 1));

	// component layout
	return (
		<div className="join sticky top-0 z-10 flex flex-nowrap rounded-none bg-base-100 p-2">
			<ButtonJoin action={goPrevMonth} icon={MdOutlineKeyboardArrowLeft} />
			<InputJoin update={props.update} value={props.value} />
			<ButtonJoin action={goNextMonth} icon={MdOutlineKeyboardArrowRight} />
		</div>
	);
}

function ButtonJoin(props: { action(): void; icon: IconType }) {
	// component logic

	// component layout
	return (
		<button
			onClick={props.action}
			className="btn btn-square join-item btn-sm rounded-lg"
			type="button"
		>
			<props.icon className="text-xl" />
		</button>
	);
}

function InputJoin(props: { update(value: Date): void; value: Date }) {
	// component logic
	const formatedDate = format(props.value, "yyyy-MM");

	// component layout
	return (
		<input
			onChange={(e) => props.update(new Date(e.target.value))}
			className="input join-item input-bordered input-sm flex-1"
			type="month"
			value={formatedDate}
		/>
	);
}
