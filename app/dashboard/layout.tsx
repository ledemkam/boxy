import ButtonSignOut from "@/components/layout/ButtonSignOut";
import DashboardNav from "@/components/layout/DashboardNav";
import { getUser } from "@/lib/action/actionsUsers";
import prisma from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function Dashboardlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const user = await getUser()


  if (!user) {
    return <div>Bitte melden Sie sich an</div>;
  }


  
  if (!user?.stripeCustomerId) {
    const stripeCustomer = await stripe.customers.create({
      email: user?.email as string,
    });

    await prisma.user.update({
      where: {
        id: user?.id as string,
      },
      data: {
        stripeCustomerId: stripeCustomer.id as string,
      }
    });
  }
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
