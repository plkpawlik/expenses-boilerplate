export default function (props: React.PropsWithChildren) {
	// component logic

	// component layout
	return (
		<main className="flex flex-col items-center justify-center w-full h-full">
			{props.children}
		</main>
	);
}
