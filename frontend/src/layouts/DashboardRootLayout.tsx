export default function DashboardRootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-2xl">Dashboard Root Layout</h1>
      </header>
      <main className="flex-grow p-4">{/* This is where the child routes will be rendered */}</main>
      <footer className="p-4 bg-gray-800 text-white">
        <p>&copy; 2023 My Application</p>
      </footer>
    </div>
  );
}
