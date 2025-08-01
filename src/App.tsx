import AppRoutes from "@/routes/AppRoutes";
import { UserProvider } from "./context/user-context";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <UserProvider>
      <AppRoutes />
      <Toaster />
    </UserProvider>
  );
}

export default App;