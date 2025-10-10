import DashboardHeader from "@/components/Header/DashboardHeader";
import { PageLayoutProps } from "@/lib/types";

const DashboardLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<DashboardHeader />
			{children}
		</>
	);
};

export default DashboardLayout;
