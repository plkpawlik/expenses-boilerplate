// @next
import Link from "next/link";

// @node
import { useRouter } from "next/navigation";

// @icon
import { IconType } from "react-icons";
import { MdArrowBackIosNew, MdBarChart, MdMoreVert, MdQueryStats } from "react-icons/md";

export function Header() {
	// component hooks
	const router = useRouter();

	// component logic
	const goBack = router.back;

	// component layout
	return (
		<header className="navbar flex-nowrap justify-between gap-2">
			<div className="flex flex-nowrap gap-2">
				<ButtonGoBack action={goBack} />
				<span className="text-lg">Chat</span>
			</div>
			<nav className="flex flex-nowrap gap-2">
				<DropdownMenu
					items={[
						{ href: "#", icon: MdQueryStats, text: "Statistics" },
						{ href: "#", icon: MdBarChart, text: "Summary" },
					]}
				/>
			</nav>
		</header>
	);
}

function ButtonGoBack(props: { action(): void }) {
	// component logic

	// component layout
	return (
		<button
			className="btn btn-square btn-ghost btn-sm"
			onClick={props.action}
			type="button"
		>
			<MdArrowBackIosNew className="text-xl" />
		</button>
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
		<div className="dropdown-end dropdown">
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
