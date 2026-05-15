import { AlertTriangle, CheckCircle, Clock, MapPin, TrendingDown } from "lucide-react";

const alerts = [
  {
    id: 1,
    date: "2026-05-12",
    time: "14:35",
    location: "Main Building - Water Distribution System",
    sensor: "Meter Balance Monitor",
    severity: "Critical",
    waterLoss: "~55 L",
    status: "New",
  },
  {
    id: 2,
    date: "2026-05-12",
    time: "14:32",
    location: "Main Building - Ground Floor",
    sensor: "Leak Sensor LS-001",
    severity: "Critical",
    waterLoss: "~450 L",
    status: "New",
  },
  {
    id: 3,
    date: "2026-05-12",
    time: "09:15",
    location: "Sports Complex - Changing Rooms",
    sensor: "Leak Sensor LS-008",
    severity: "Medium",
    waterLoss: "~120 L",
    status: "In Progress",
  },
  {
    id: 4,
    date: "2026-05-11",
    time: "16:45",
    location: "Science Lab - Building C",
    sensor: "Leak Sensor LS-014",
    severity: "Low",
    waterLoss: "~35 L",
    status: "Resolved",
  },
  {
    id: 5,
    date: "2026-05-10",
    time: "11:20",
    location: "Cafeteria - Kitchen Area",
    sensor: "Leak Sensor LS-005",
    severity: "Medium",
    waterLoss: "~180 L",
    status: "Resolved",
  },
  {
    id: 6,
    date: "2026-05-09",
    time: "07:55",
    location: "Admin Block - Restrooms",
    sensor: "Leak Sensor LS-003",
    severity: "Low",
    waterLoss: "~50 L",
    status: "Resolved",
  },
];

export function LeakAlerts() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-50 text-red-700 border-red-200";
      case "Medium":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "Low":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-red-50 text-red-700";
      case "In Progress":
        return "bg-blue-50 text-blue-700";
      case "Resolved":
        return "bg-green-50 text-green-700";
      default:
        return "bg-slate-50 text-slate-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved":
        return <CheckCircle className="w-3.5 h-3.5" />;
      case "In Progress":
        return <Clock className="w-3.5 h-3.5" />;
      default:
        return <AlertTriangle className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Leak Alerts</h1>
          <p className="text-slate-500 mt-2">Monitor and manage water leak detections</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-4 py-2.5 bg-red-50 text-red-700 rounded-xl font-semibold text-sm border border-red-200">
            2 Critical Alerts
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Total Alerts</div>
              <div className="text-3xl font-bold text-slate-800">6</div>
              <div className="text-xs text-slate-500 mt-1">Last 7 days</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-sm">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Active Alerts</div>
              <div className="text-3xl font-bold text-orange-600">3</div>
              <div className="text-xs text-slate-500 mt-1">Needs attention</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-sm">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Water Loss</div>
              <div className="text-3xl font-bold text-red-600">890 L</div>
              <div className="text-xs text-slate-500 mt-1">Estimated total</div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl shadow-sm">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800 text-lg">Alert History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Sensor
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Est. Loss
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {alerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-800">{alert.date}</div>
                    <div className="text-xs text-slate-500">{alert.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{alert.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-slate-700">{alert.sensor}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold border ${getSeverityColor(
                        alert.severity
                      )}`}
                    >
                      {alert.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-slate-800">
                      {alert.waterLoss}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${getStatusColor(
                        alert.status
                      )}`}
                    >
                      {getStatusIcon(alert.status)}
                      {alert.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
