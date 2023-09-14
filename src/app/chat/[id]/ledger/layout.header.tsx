// @next
import Link from "next/link";

// @icon
import { IconType } from "react-icons";
import { MdArrowBackIosNew, MdAutoFixHigh, MdBarChart, MdMoreVert } from "react-icons/md";

export function Header() {
	// component logic

	// component layout
	return (
		<header className="navbar flex-nowrap justify-between gap-2">
			<div className="flex flex-nowrap gap-2">
				<ButtonGoHome href="/home/ledgers" />
				<span className="text-lg">Chat</span>
			</div>
			<nav className="flex flex-nowrap gap-2">
				<DropdownMenu
					items={[
						{ href: "#", icon: MdAutoFixHigh, text: "Options" },
						{ href: "#", icon: MdBarChart, text: "Summary" },
					]}
				/>
			</nav>
		</header>
	);
}

function ButtonGoHome(props: { href: string }) {
	// component logic

	// component layout
	return (
		<Link href={props.href} className="btn btn-square btn-ghost btn-sm">
			<MdArrowBackIosNew className="text-xl" />
		</Link>
	);
}

function DropdownMenu(props: {
	items: {
		href: string;
		text: string;
		icon: IconType;
	}[];
}) {
	// component logic

	// component layout
	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-square btn-ghost btn-sm">
				<MdMoreVert className="text-xl" />
			</label>
			<ul
				tabIndex={0}
				className="menu dropdown-content rounded-box z-20 mt-2 w-36 bg-base-100 p-2 shadow"
			>
				{props.items.map((item) => (
					<li key={item.text}>
						<Link href={item.href}>
							<item.icon className="mr-2 text-lg" />
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
