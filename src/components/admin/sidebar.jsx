import {
  ChartColumnIncreasing,
  ChartNoAxesCombined,
  ShoppingCart,
  Wallet,
} from "lucide-react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

function AdminSidebar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* hidden sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex items-center gap-2">
                <ChartColumnIncreasing size={30} />
                <span className="font-bold">Admin Dashboard</span>
              </SheetTitle>
            </SheetHeader>
            <MenuItems onNavigate={navigate} setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>

      {/* visible sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-background p-4 lg:flex ">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartColumnIncreasing size={30} />
          <h1 className="text-xl font-extrabold">Admin Dashboard</h1>
        </div>

        <MenuItems onNavigate={navigate} />
      </aside>
    </Fragment>
  );
}

export default AdminSidebar;

const AdminSidebarMenu = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <ChartNoAxesCombined />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingCart />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <Wallet />,
  },
];

function MenuItems({ onNavigate, setOpen }) {
  const location = useLocation();

  return (
    <nav className="mt-8 flex flex-col gap-2">
      {AdminSidebarMenu.map((menuItem) => {
        const isActive = location.pathname.startsWith(menuItem.path);

        return (
          <div
            key={menuItem.id}
            onClick={() => {
              onNavigate(menuItem.path);
              setOpen ? setOpen(false) : null;
            }}
            className={`cursor-pointer flex items-center gap-2 rounded-md px-3 py-2  
            ${
              isActive
                ? "bg-accent-foreground text-accent"
                : "hover:bg-accent-foreground hover:text-accent transition-all duration-200"
            }`}
          >
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </div>
        );
      })}
    </nav>
  );
}
