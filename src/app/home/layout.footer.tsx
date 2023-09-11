import Link from "next/link";

// icons
import { IconType } from "react-icons";
import { MdEditCalendar, MdInsertChart, MdNotifications, MdPerson } from "react-icons/md";

export function Footer() {
	// component logic

	// component layout
	return (
		<footer className="navbar flex-nowrap gap-2 border-t pb-6">
			<ButtonBottomNav href="#" icon={MdEditCalendar} />
			<ButtonBottomNav href="#" icon={MdInsertChart} />
			<ButtonBottomNav href="#" icon={MdNotifications} />
			<ButtonBottomNav href="#" icon={MdPerson} />
		</footer>
	);
}

function ButtonBottomNav(props: { href: string; icon: IconType }) {
	// component logic

	// component layout
	return (
		<Link href={props.href} className="btn btn-ghost flex-1">
			<props.icon className="text-xl" />
		</Link>
	);
}
