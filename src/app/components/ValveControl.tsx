import { useState } from "react";
import { Settings, MapPin, CheckCircle, AlertCircle, Power, ShieldAlert } from "lucide-react";

const valves = [
  {
    id: 1,
    name: "Main Supply Valve",
    location: "Main Building - Basement",
    status: "Open",
    lastAction: "2026-05-12 08:00",
    controlledBy: "System Admin",
  },
  {
    id: 2,
    name: "Valve 1 (Administration)",
    location: "Administration Block",
    status: "Open",
    lastAction: "2026-05-12 07:30",
    controlledBy: "System Auto",
  },
  {
    id: 3,
    name: "Valve 2 (Classrooms)",
    location: "Classrooms",
    status: "Open",
    lastAction: "2026-05-12 07:30",
    controlledBy: "System Auto",
  },
  {
    id: 4,
    name: "Valve 3 (Hostel)",
    location: "Hostel",
    status: "Open",
    lastAction: "2026-05-12 07:30",
    controlledBy: "System Auto",
  },
  {
    id: 5,
    name: "Valve 4 (Kitchen & Dining)",
    location: "Kitchen & Dining",
    status: "Open",
    lastAction: "2026-05-12 07:30",
    controlledBy: "System Auto",
  },
];

export function ValveControl() {
  const [selectedValve, setSelectedValve] = useState(valves[0]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingAction, setPendingAction] = useState<"open" | "close" | null>(null);

  const handleValveAction = (action: "open" | "close") => {
    setPendingAction(action);
    setShowConfirmation(true);
  };

  const confirmAction = () => {
    const newStatus = pendingAction === "open" ? "Open" : "Closed";
    setSelectedValve({
      ...selectedValve,
      status: newStatus,
      lastAction: new Date().toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).replace(",", ""),
      controlledBy: "System Admin",
    });
    setShowConfirmation(false);
    setPendingAction(null);
  };

  const cancelAction = () => {
    setShowConfirmation(false);
    setPendingAction(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Valve Control</h1>
        <p className="text-slate-500 mt-2">Monitor and control automated shut-off valves</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Total Valves</div>
              <div className="text-3xl font-bold text-slate-800">5</div>
              <div className="text-xs text-slate-500 mt-1">Installed</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-sm">
              <Settings className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Open Valves</div>
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-xs text-slate-500 mt-1">Operational</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Closed Valves</div>
              <div className="text-3xl font-bold text-slate-600">0</div>
              <div className="text-xs text-slate-500 mt-1">None</div>
            </div>
            <div className="bg-gradient-to-br from-slate-400 to-slate-500 p-3 rounded-xl shadow-sm">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800 text-lg">All Valves</h2>
          </div>
          <div className="p-5 space-y-3">
            {valves.map((valve) => (
              <div
                key={valve.id}
                onClick={() => setSelectedValve(valve)}
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedValve.id === valve.id
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 text-base">{valve.name}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4" />
                      {valve.location}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                      valve.status === "Open"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {valve.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-slate-50">
            <h2 className="font-semibold text-slate-800 text-lg">Valve Control Panel</h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800">{selectedValve.name}</h3>
              <div className="flex items-center gap-2 mt-2 text-slate-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{selectedValve.location}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm font-medium text-slate-600">Current Status</span>
                <span
                  className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                    selectedValve.status === "Open"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {selectedValve.status}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm font-medium text-slate-600">Last Action</span>
                <span className="text-sm font-semibold text-slate-800">{selectedValve.lastAction}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm font-medium text-slate-600">Controlled By</span>
                <span className="text-sm font-semibold text-slate-800">{selectedValve.controlledBy}</span>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => handleValveAction("close")}
                disabled={selectedValve.status === "Closed"}
                className="w-full bg-red-600 text-white py-3.5 rounded-xl hover:bg-red-700 transition-all font-semibold disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md disabled:shadow-none"
              >
                <Power className="w-5 h-5" />
                Close Valve
              </button>
              <button
                onClick={() => handleValveAction("open")}
                disabled={selectedValve.status === "Open"}
                className="w-full bg-green-600 text-white py-3.5 rounded-xl hover:bg-green-700 transition-all font-semibold disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md disabled:shadow-none"
              >
                <Power className="w-5 h-5" />
                Open Valve
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => handleValveAction("close")}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl hover:shadow-lg transition-all font-bold flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-5 h-5" />
                EMERGENCY SHUT-OFF
              </button>
              <p className="text-xs text-slate-500 text-center mt-2">
                Immediately closes all water supply valves
              </p>
            </div>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-7 animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-orange-100 p-3 rounded-xl">
                <AlertCircle className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Confirm Action</h3>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Are you sure you want to <span className="font-semibold">{pendingAction}</span> the valve{" "}
              <span className="font-semibold">"{selectedValve.name}"</span>?
              <br />
              <br />
              This action will affect water flow to <span className="font-semibold">{selectedValve.location}</span>.
            </p>
            <div className="flex gap-3">
              <button
                onClick={cancelAction}
                className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl hover:bg-slate-200 transition-colors font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={confirmAction}
                className={`flex-1 py-3 rounded-xl transition-all font-semibold text-white shadow-md hover:shadow-lg ${
                  pendingAction === "open"
                    ? "bg-gradient-to-r from-green-600 to-green-700"
                    : "bg-gradient-to-r from-red-600 to-red-700"
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
