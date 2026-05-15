import { useState } from "react";
import { RefreshCw, Wifi, Droplet, Power, Activity, AlertCircle } from "lucide-react";

interface Meter {
  id: string;
  name: string;
  reading: number;
  flowRate: number;
  status: "Online" | "Offline";
}

interface Valve {
  id: string;
  name: string;
  status: "Open" | "Closed";
  mode: "Auto" | "Manual";
}

interface Sensor {
  id: string;
  name: string;
  status: "Dry" | "Wet";
  condition: "Normal" | "Abnormal";
}

export function Schematic() {
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());

  const [gateway] = useState({
    status: "Online",
    signal: "Excellent",
  });

  const [mainMeter] = useState<Meter>({
    id: "main",
    name: "Main Meter",
    reading: 11.72,
    flowRate: 42.5,
    status: "Online",
  });

  const [mainValve] = useState<Valve>({
    id: "main-valve",
    name: "Main Valve",
    status: "Open",
    mode: "Auto",
  });

  const [subMeters] = useState<Meter[]>([
    { id: "sub1", name: "Sub-Meter 1", reading: 6.03, flowRate: 12.5, status: "Online" },
    { id: "sub2", name: "Sub-Meter 2", reading: 2.85, flowRate: 8.3, status: "Online" },
    { id: "sub3", name: "Sub-Meter 3", reading: 1.91, flowRate: 15.8, status: "Online" },
    { id: "sub4", name: "Sub-Meter 4", reading: 0.75, flowRate: 5.9, status: "Online" },
  ]);

  const [subValves] = useState<Valve[]>([
    { id: "valve1", name: "Valve 1", status: "Open", mode: "Auto" },
    { id: "valve2", name: "Valve 2", status: "Open", mode: "Auto" },
    { id: "valve3", name: "Valve 3", status: "Open", mode: "Auto" },
    { id: "valve4", name: "Valve 4", status: "Open", mode: "Auto" },
  ]);

  const [sensors] = useState<Sensor[]>([
    { id: "sensor1", name: "Sensor 1", status: "Dry", condition: "Normal" },
    { id: "sensor2", name: "Sensor 2", status: "Dry", condition: "Normal" },
    { id: "sensor3", name: "Sensor 3", status: "Dry", condition: "Normal" },
    { id: "sensor4", name: "Sensor 4", status: "Dry", condition: "Normal" },
  ]);

  const areas = [
    "Administration",
    "Classrooms",
    "Hostel",
    "Kitchen & Dining",
  ];

  const totalSubMeters = subMeters.reduce((sum, meter) => sum + meter.reading, 0);
  const waterLoss = mainMeter.reading - totalSubMeters;
  const lossPercentage = ((waterLoss / mainMeter.reading) * 100).toFixed(2);

  const handleRefresh = () => {
    setLastUpdate(new Date().toLocaleTimeString());
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Schematic</h1>
          <p className="text-slate-500 mt-2">Real-time water distribution diagram</p>
        </div>
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-sm hover:shadow-md"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            Last updated: <span className="font-semibold text-slate-800">{lastUpdate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-slate-600 font-medium">Live Monitoring</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* Gateway */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 border-2 border-green-300 shadow-md inline-block">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-3 rounded-xl shadow-sm">
                  <Wifi className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">Gateway</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-bold text-green-700">{gateway.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical connector */}
          <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-500 mb-8"></div>

          {/* Main Meter */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-300 shadow-md" style={{ width: '280px' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-sm">
                  <Droplet className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">Main Meter</div>
                  <div className="text-2xl font-bold text-blue-700 mt-1">{mainMeter.reading}L</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 font-medium">Flow Rate</span>
                  <span className="text-sm font-bold text-slate-800">{mainMeter.flowRate} L/min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 font-medium">Status</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-bold text-green-700">{mainMeter.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical connector */}
          <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-500 mb-8"></div>

          {/* Main Valve */}
          <div className="mb-8">
            <div className="bg-white rounded-xl p-5 border-2 border-purple-300 shadow-md" style={{ width: '220px' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-2.5 rounded-xl shadow-sm">
                  <Power className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">Main Valve</div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="flex-1 text-center px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-bold border border-green-200">
                  {mainValve.status}
                </span>
                <span className="flex-1 text-center px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold border border-slate-300">
                  {mainValve.mode}
                </span>
              </div>
            </div>
          </div>

          {/* Vertical connector and split */}
          <div className="relative mb-8" style={{ width: '800px', height: '60px' }}>
            {/* Vertical line down */}
            <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-500 -translate-x-1/2"></div>

            {/* Horizontal distribution line */}
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>

            {/* Vertical drops to each sub-meter */}
            <div className="absolute left-[12.5%] top-8 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-500 -translate-x-1/2"></div>
            <div className="absolute left-[37.5%] top-8 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-500 -translate-x-1/2"></div>
            <div className="absolute left-[62.5%] top-8 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-500 -translate-x-1/2"></div>
            <div className="absolute left-[87.5%] top-8 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-500 -translate-x-1/2"></div>
          </div>

          {/* Sub-Meters Grid */}
          <div className="grid grid-cols-4 gap-8" style={{ width: '900px' }}>
            {subMeters.map((meter, index) => (
              <div key={meter.id} className="flex flex-col items-center space-y-6">
                {/* Sub-Meter */}
                <div className="bg-white rounded-xl p-4 border-2 border-cyan-300 shadow-md w-full">
                  <div className="text-center mb-3">
                    <div className="inline-block bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 rounded-xl shadow-sm mb-2">
                      <Droplet className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wide">SUB-METER {index + 1}</div>
                    <div className="text-xl font-bold text-cyan-700 mt-1">{meter.reading}L</div>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-[10px] font-bold text-green-700">{meter.status}</span>
                  </div>
                </div>

                {/* Vertical connector */}
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-500"></div>

                {/* Valve */}
                <div className="bg-white rounded-lg p-3 border-2 border-purple-300 shadow-md w-full">
                  <div className="text-center mb-2">
                    <div className="inline-block bg-gradient-to-br from-purple-600 to-purple-700 p-2 rounded-lg shadow-sm mb-1">
                      <Power className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wide">VALVE {index + 1}</div>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-center px-2 py-1 bg-green-50 text-green-700 rounded text-[10px] font-bold border border-green-200">
                      {subValves[index].status}
                    </span>
                    <span className="block text-center px-2 py-1 bg-slate-100 text-slate-700 rounded text-[10px] font-bold border border-slate-300">
                      {subValves[index].mode}
                    </span>
                  </div>
                </div>

                {/* Vertical connector */}
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-500"></div>

                {/* Sensor */}
                <div className="bg-white rounded-lg p-3 border-2 border-blue-300 shadow-md w-full">
                  <div className="text-center mb-2">
                    <div className="inline-block bg-gradient-to-br from-blue-500 to-cyan-600 p-2 rounded-lg shadow-sm mb-1">
                      <Droplet className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wide">SENSOR {index + 1}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${sensors[index].condition === 'Normal' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className={`text-[10px] font-bold ${sensors[index].condition === 'Normal' ? 'text-green-700' : 'text-red-700'}`}>
                        {sensors[index].condition}
                      </span>
                    </div>
                    <div className="text-center text-[10px] text-slate-600 font-semibold">{sensors[index].status}</div>
                  </div>
                </div>

                {/* Vertical connector */}
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-500"></div>

                {/* Area */}
                <div className={`rounded-xl p-4 shadow-md border-2 w-full ${
                  index === 0 ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300' :
                  index === 1 ? 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-300' :
                  index === 2 ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-300' :
                  'bg-gradient-to-br from-rose-50 to-rose-100 border-rose-300'
                }`}>
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">AREA {index + 1}</div>
                    <div className={`text-xs font-bold mt-1 ${
                      index === 0 ? 'text-purple-800' :
                      index === 1 ? 'text-amber-800' :
                      index === 2 ? 'text-green-800' :
                      'text-rose-800'
                    }`}>{areas[index]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Water Balance Section */}
        <div className="mt-16 pt-8 border-t-2 border-slate-200">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-800">Water Balance Information</h3>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-slate-600 font-medium">Main Meter = Sum of sub-meters (should be close to 0)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-xl p-5 border border-blue-200 shadow-sm text-center">
                <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide mb-2">Main Meter</div>
                <div className="text-3xl font-bold text-blue-700">{mainMeter.reading}L</div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-cyan-200 shadow-sm text-center">
                <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide mb-2">Sub-Meters</div>
                <div className="text-3xl font-bold text-cyan-700">{totalSubMeters.toFixed(2)}L</div>
              </div>

              <div className={`rounded-xl p-5 border-2 shadow-sm text-center ${
                parseFloat(lossPercentage) > 5
                  ? "bg-gradient-to-br from-red-50 to-orange-50 border-red-300"
                  : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-300"
              }`}>
                <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide mb-2">Water Loss</div>
                <div className={`text-3xl font-bold ${parseFloat(lossPercentage) > 5 ? "text-red-700" : "text-green-700"}`}>
                  {lossPercentage}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
