import FrontendHeader from "@/components/Header/FrontendHeader";
import { PageLayoutProps } from "@/lib/types";

const FrontendLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<FrontendHeader />
			{children}
		</>
	);
};

export default FrontendLayout;
