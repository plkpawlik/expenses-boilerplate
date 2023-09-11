// icons
import { IconType } from "react-icons";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export function InputMonth(props: { update(value: Date): void; value: Date }) {
	// component logic
	const goNextMonth = () => {};
	const goPrevMonth = () => {};

	// component layout
	return (
		<div className="join flex flex-nowrap">
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
			className="btn btn-square join-item btn-sm"
			type="button"
		>
			<props.icon className="text-xl" />
		</button>
	);
}

function InputJoin(props: { update(value: Date): void; value: Date }) {
	// component logic

	// component layout
	return <input className="input join-item input-bordered input-sm flex-1" type="month" />;
}
