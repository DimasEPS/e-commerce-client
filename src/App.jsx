import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin/layout";
import AdminFeatures from "./pages/admin/features";
import AdminDashboard from "./pages/admin/dashboard";
import AdminOrders from "./pages/admin/orders";
import AdmubProducts from "./pages/admin/products";
import ShoppingLayout from "./components/shopping/layout";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common components */}
      <h1>header</h1>

      <Routes>
        {/* auth */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdmubProducts />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/* shopping */}
        <Route path="/shopping" element={<ShoppingLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
