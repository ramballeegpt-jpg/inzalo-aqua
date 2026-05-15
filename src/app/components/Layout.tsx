import { Outlet, NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  AlertTriangle,
  Gauge,
  Settings,
  FileText,
  Droplet,
  LogOut,
  Menu,
  X,
  Building2,
  Network
} from "lucide-react";
import { useState } from "react";
import iasLogo from "../../imports/IAS.jpg";

export function Layout() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Schematic", path: "/schematic", icon: Network },
    { name: "Leak Alerts", path: "/leaks", icon: AlertTriangle },
    { name: "Meter Readings", path: "/meters", icon: Gauge },
    { name: "Valve Control", path: "/valves", icon: Settings },
    { name: "Reports", path: "/reports", icon: FileText },
    { name: "Devices", path: "/devices", icon: Droplet },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-4">
              <img
                src={iasLogo}
                alt="Inzalo Aqua Solutions"
                className="h-12 w-auto"
              />
              <div>
                <div className="text-lg font-bold text-slate-800">
                  Inzalo Aqua
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1"> Public Buildings Demo</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-600 shadow-sm"
                        : "text-slate-600 hover:bg-slate-100"
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </NavLink>
              ))}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-all ml-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100"
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </NavLink>
              ))}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
