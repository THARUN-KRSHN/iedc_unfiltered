import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminExcomGrid from "@/components/AdminExcomGrid";

export const revalidate = 0;

export default async function AdminPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/admin/login");
    }

    return (
        <main className="min-h-screen pt-24 pb-32 px-4 bg-brand-cream relative z-20">
            <div className="max-w-7xl mx-auto relative z-20">
                <div className="text-center mb-16 md:mb-24">
                    <span className="font-sans text-brand-dark/50 font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-2 block">
                        Admin Dashboard
                    </span>
                    <h1 className="font-display text-6xl md:text-9xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-6 relative inline-block">
                        Results
                    </h1>
                </div>

                <AdminExcomGrid />
            </div>
        </main>
    );
}
