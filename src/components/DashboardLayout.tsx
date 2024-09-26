import { ChildrenProps } from "@/types";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import { Heading, Paragraph } from "./ui/typography";

export default function DashboardLayout({ children }: ChildrenProps) {
  return (
    <Layout>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="ml-64 w-full p-6 space-y-10">
          <section className="w-full flex justify-between items-center">
            <div>
              <Heading as="h3" className="text-2xl font-bold mb-2">
                Hi, Verstappen!
              </Heading>
              <Paragraph>Monday, September 09, 2024</Paragraph>
            </div>
            <img src="/images/ryo.svg" loading="lazy" alt="profile" />
          </section>
          {children}
        </main>
      </div>
    </Layout>
  );
}
