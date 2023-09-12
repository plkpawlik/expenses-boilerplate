import Link from "next/link";

import { IconType } from "react-icons";
import { MdEditCalendar, MdInsertChart, MdNotifications, MdPerson } from "react-icons/md";

export function Footer() {
	// component logic

	// component layout
	return (
		<footer className="navbar flex-nowrap gap-2 border-t pb-6">
			<ButtonBottomNav href="/home/ledgers" icon={MdEditCalendar} />
			<ButtonBottomNav href="/home/reports" icon={MdInsertChart} />
			<ButtonBottomNav href="/home/updates" icon={MdNotifications} />
			<ButtonBottomNav href="/home/account" icon={MdPerson} />
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
