import ButtonSignOut from "@/components/layout/ButtonSignOut";
import DashboardNav from "@/components/layout/DashboardNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function Dashboardlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="max-w-[1200px] mx-auto md:flex md:items-center md:gap-4 h-screen w-full mt-2 p-2">
      <DashboardNav />
      <div className="w-full h-full">
        <ButtonSignOut />
        {children}
        <ToastContainer />
      </div>
    </section>
  );
}
