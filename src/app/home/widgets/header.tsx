import Link from "next/link";

// icons
import { MdMoreVert, MdPerson, MdSearch } from "react-icons/md";

export function Header() {
	// component logic

	// component layout
	return (
		<header className="gap-4 justify-between navbar ">
			<InfoPanel href="" label="Home" />
			<MenuPanel href="" />
		</header>
	);
}

function InfoPanel(props: { href: string; label: string }) {
	// component logic

	// component layout
	return (
		<div className="flex flex-nowrap gap-2 overflow-hidden">
			<Link className="avatar btn btn-sm btn-circle online" href={props.href}>
				<MdPerson className="text-xl" />
			</Link>
			<p className="font-semibold truncate">{props.label}</p>
		</div>
	);
}

function MenuPanel(props: { href: string }) {
	// component logic

	// component layout
	return (
		<nav className="flex flex-nowrap gap-2">
			<Link className="btn btn-ghost btn-sm btn-square" href={props.href}>
				<MdSearch className="text-xl" />
			</Link>
			<Menu
				list={[
					{ href: "", name: "Privacy" },
					{ href: "", name: "Settings" },
				]}
			/>
		</nav>
	);
}

function Menu(props: {
	list: {
		href: string;
		name: string;
	}[];
}) {
	// component logic

	// component layout
	return (
		<div className="dropdown dropdown-end">
			<label className="btn btn-ghost btn-sm btn-square" tabIndex={0}>
				<MdMoreVert className="text-xl" />
			</label>
			<ul className="dropdown-content menu mt-2 p-2 rounded shadow w-max" tabIndex={0}>
				{props.list.map((item) => (
					<li>
						<Link href={item.href}>{item.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
