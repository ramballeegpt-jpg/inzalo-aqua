import {
  Gauge,
  Droplet,
  Settings,
  Wifi,
  Battery,
  CheckCircle,
  AlertCircle,
  Signal,
  Activity
} from "lucide-react";

const devices = [
  {
    id: 1,
    name: "Gateway Hub GW-001",
    type: "Gateway",
    location: "Main Building - Server Room",
    status: "Online",
    battery: 100,
    signal: "Excellent",
    lastCommunication: "30 sec ago",
    firmwareVersion: "v4.2.5",
  },
  {
    id: 2,
    name: "Main Water Meter WM-001",
    type: "Water Meter",
    location: "Main Building - Basement",
    status: "Online",
    battery: 95,
    signal: "Excellent",
    lastCommunication: "2 min ago",
    firmwareVersion: "v2.4.1",
  },
  {
    id: 3,
    name: "Main Supply Valve",
    type: "Shut-off Valve",
    location: "Main Building - Basement",
    status: "Online",
    battery: 98,
    signal: "Excellent",
    lastCommunication: "1 min ago",
    firmwareVersion: "v3.1.0",
  },
  {
    id: 4,
    name: "Sub-Meter 1 (Administration)",
    type: "Water Meter",
    location: "Administration Block",
    status: "Online",
    battery: 92,
    signal: "Excellent",
    lastCommunication: "3 min ago",
    firmwareVersion: "v2.4.1",
  },
  {
    id: 5,
    name: "Valve 1 (Administration)",
    type: "Shut-off Valve",
    location: "Administration Block",
    status: "Online",
    battery: 94,
    signal: "Excellent",
    lastCommunication: "3 min ago",
    firmwareVersion: "v3.1.0",
  },
  {
    id: 6,
    name: "Sensor 1 (Administration)",
    type: "Leak Sensor",
    location: "Administration Block",
    status: "Online",
    battery: 88,
    signal: "Good",
    lastCommunication: "5 min ago",
    firmwareVersion: "v1.8.3",
  },
  {
    id: 7,
    name: "Sub-Meter 2 (Classrooms)",
    type: "Water Meter",
    location: "Classrooms",
    status: "Online",
    battery: 91,
    signal: "Excellent",
    lastCommunication: "4 min ago",
    firmwareVersion: "v2.4.1",
  },
  {
    id: 8,
    name: "Valve 2 (Classrooms)",
    type: "Shut-off Valve",
    location: "Classrooms",
    status: "Online",
    battery: 93,
    signal: "Good",
    lastCommunication: "4 min ago",
    firmwareVersion: "v3.1.0",
  },
  {
    id: 9,
    name: "Sensor 2 (Classrooms)",
    type: "Leak Sensor",
    location: "Classrooms",
    status: "Online",
    battery: 90,
    signal: "Good",
    lastCommunication: "6 min ago",
    firmwareVersion: "v1.8.3",
  },
  {
    id: 10,
    name: "Sub-Meter 3 (Hostel)",
    type: "Water Meter",
    location: "Hostel",
    status: "Online",
    battery: 89,
    signal: "Excellent",
    lastCommunication: "5 min ago",
    firmwareVersion: "v2.4.1",
  },
  {
    id: 11,
    name: "Valve 3 (Hostel)",
    type: "Shut-off Valve",
    location: "Hostel",
    status: "Online",
    battery: 92,
    signal: "Good",
    lastCommunication: "5 min ago",
    firmwareVersion: "v3.1.0",
  },
  {
    id: 12,
    name: "Sensor 3 (Hostel)",
    type: "Leak Sensor",
    location: "Hostel",
    status: "Online",
    battery: 87,
    signal: "Good",
    lastCommunication: "7 min ago",
    firmwareVersion: "v1.8.3",
  },
  {
    id: 13,
    name: "Sub-Meter 4 (Kitchen)",
    type: "Water Meter",
    location: "Kitchen & Dining",
    status: "Online",
    battery: 90,
    signal: "Good",
    lastCommunication: "6 min ago",
    firmwareVersion: "v2.4.1",
  },
  {
    id: 14,
    name: "Valve 4 (Kitchen)",
    type: "Shut-off Valve",
    location: "Kitchen & Dining",
    status: "Online",
    battery: 91,
    signal: "Good",
    lastCommunication: "6 min ago",
    firmwareVersion: "v3.1.0",
  },
  {
    id: 15,
    name: "Sensor 4 (Kitchen)",
    type: "Leak Sensor",
    location: "Kitchen & Dining",
    status: "Online",
    battery: 86,
    signal: "Fair",
    lastCommunication: "8 min ago",
    firmwareVersion: "v1.8.3",
  },
];

export function DeviceManagement() {
  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "Water Meter":
        return <Gauge className="w-6 h-6 text-white" />;
      case "Leak Sensor":
        return <Droplet className="w-6 h-6 text-white" />;
      case "Shut-off Valve":
        return <Settings className="w-6 h-6 text-white" />;
      case "Gateway":
        return <Wifi className="w-6 h-6 text-white" />;
      default:
        return <Activity className="w-6 h-6 text-white" />;
    }
  };

  const getDeviceGradient = (type: string) => {
    switch (type) {
      case "Water Meter":
        return "from-blue-500 to-blue-600";
      case "Leak Sensor":
        return "from-cyan-500 to-blue-600";
      case "Shut-off Valve":
        return "from-violet-500 to-purple-600";
      case "Gateway":
        return "from-emerald-500 to-green-600";
      default:
        return "from-slate-500 to-slate-600";
    }
  };

  const getBatteryColor = (level: number) => {
    if (level >= 80) return "text-green-600 bg-green-50";
    if (level >= 50) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case "Excellent":
        return "text-green-700 bg-green-50 border-green-200";
      case "Good":
        return "text-blue-700 bg-blue-50 border-blue-200";
      case "Fair":
        return "text-yellow-700 bg-yellow-50 border-yellow-200";
      default:
        return "text-red-700 bg-red-50 border-red-200";
    }
  };

  const deviceTypes = [
    { name: "Gateway", count: 1, icon: Wifi },
    { name: "Water Meter", count: 5, icon: Gauge },
    { name: "Shut-off Valve", count: 5, icon: Settings },
    { name: "Leak Sensor", count: 4, icon: Droplet },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Device Management</h1>
        <p className="text-slate-500 mt-2">Monitor and manage all connected devices</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Total Devices</div>
              <div className="text-3xl font-bold text-slate-800">15</div>
              <div className="text-xs text-slate-500 mt-1">All systems</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-sm">
              <Settings className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Online</div>
              <div className="text-3xl font-bold text-green-600">15</div>
              <div className="text-xs text-slate-500 mt-1">100% uptime</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Offline</div>
              <div className="text-3xl font-bold text-slate-600">0</div>
              <div className="text-xs text-slate-500 mt-1">No issues</div>
            </div>
            <div className="bg-gradient-to-br from-slate-400 to-slate-500 p-3 rounded-xl shadow-sm">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Avg Battery</div>
              <div className="text-3xl font-bold text-green-600">91%</div>
              <div className="text-xs text-slate-500 mt-1">Healthy</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-sm">
              <Battery className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {deviceTypes.map((type) => (
          <div key={type.name} className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 font-medium">{type.name}s</p>
                <p className="text-2xl font-bold text-slate-800 mt-2">{type.count}</p>
              </div>
              <div className={`bg-gradient-to-br ${getDeviceGradient(type.name)} p-3 rounded-xl shadow-sm`}>
                <type.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50">
          <h2 className="font-semibold text-slate-800 text-lg">All Devices</h2>
          <p className="text-sm text-slate-500 mt-1">Complete device inventory and status</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Device
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Battery
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Signal
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Last Comm.
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Firmware
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {devices.map((device) => (
                <tr key={device.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-br ${getDeviceGradient(device.type)} p-3 rounded-xl shadow-sm`}>
                        {getDeviceIcon(device.type)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">{device.name}</div>
                        <div className="text-sm text-slate-500 mt-0.5">{device.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-sm font-medium text-slate-700">{device.type}</span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-semibold border border-green-200">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {device.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${getBatteryColor(device.battery)}`}>
                        <Battery className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{device.battery}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${getSignalColor(device.signal)}`}>
                      <Signal className="w-3.5 h-3.5" />
                      {device.signal}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-sm text-slate-700">{device.lastCommunication}</span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-sm font-mono text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      {device.firmwareVersion}
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
