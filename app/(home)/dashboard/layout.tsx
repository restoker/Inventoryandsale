
import LayoutDashboard from "../_ui/LayoutDashboard";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LayoutDashboard>
            {children}
        </LayoutDashboard>
    );
}