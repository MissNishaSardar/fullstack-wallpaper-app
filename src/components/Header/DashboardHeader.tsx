import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";

const DashboardHeader = () => {
	return (
		<header
			className="border-b shadow"
			aria-label="app-header">
			<div className="container mx-auto flex items-center justify-between px-6 py-3">
				<Link href={"/dashboard"}>
					<h1
						className="text-2xl font-semibold"
						aria-label="App Name">
						NST App
					</h1>
				</Link>

				<nav className="flex items-center gap-4">
					<Link href={"/dashboard"}>Dashboard</Link>

					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default DashboardHeader;
