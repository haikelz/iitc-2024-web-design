import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 ml-64 p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          varius libero et mauris convallis, a facilisis sapien fringilla.
        </p>
      </main>
    </div>
  );
}
