import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./context/ProtectedRoute";

const App = () => {
  return (
    <ProtectedRoute>
      <MainLayout></MainLayout>;
    </ProtectedRoute>
  );
};

export default App;
