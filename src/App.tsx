import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <UserProvider>
      <AppRoutes />
  );
}

export default App;