import Link from "next/link";

// icons
import { IconType } from "react-icons";
import { MdEditCalendar, MdInsertChart, MdNotifications, MdPerson } from "react-icons/md";

export function Footer() {
	// component logic

	// component layout
	return (
		<footer className="border-t gap-2 navbar pb-5">
			<NavButton href="/home/ledgers" icon={MdEditCalendar} />
			<NavButton href="/home/reports" icon={MdInsertChart} />
			<NavButton href="/home/updates" icon={MdNotifications} />
			<NavButton href="/home/account" icon={MdPerson} />
		</footer>
	);
}

function NavButton(props: { href: string; icon: IconType }) {
	// component logic

	// component layout
	return (
		<Link className="btn btn-ghost flex-1" href={props.href}>
			<props.icon className="text-lg" />
		</Link>
	);
}
