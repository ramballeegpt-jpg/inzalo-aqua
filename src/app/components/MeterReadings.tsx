import { useState } from "react";
import { Gauge, Battery, Signal, Droplet, Activity, AlertTriangle, CheckCircle, RefreshCw, Edit2, Save, X } from "lucide-react";

interface SubMeter {
  id: number;
  name: string;
  flowRate: number;
  totalLitres: number;
  battery: number;
  signal: number;
  lastUpdate: string;
}

export function MeterReadings() {
  const [mainMeterReading, setMainMeterReading] = useState(1248);
  const [subMeters, setSubMeters] = useState<SubMeter[]>([
    {
      id: 1,
      name: "Sub-Meter 1",
      flowRate: 12.5,
      totalLitres: 320,
      battery: 92,
      signal: 5,
      lastUpdate: "2 min ago",
    },
    {
      id: 2,
      name: "Sub-Meter 2",
      flowRate: 8.3,
      totalLitres: 285,
      battery: 88,
      signal: 4,
      lastUpdate: "3 min ago",
    },
    {
      id: 3,
      name: "Sub-Meter 3",
      flowRate: 15.8,
      totalLitres: 410,
      battery: 95,
      signal: 5,
      lastUpdate: "1 min ago",
    },
    {
      id: 4,
      name: "Sub-Meter 4",
      flowRate: 5.9,
      totalLitres: 178,
      battery: 90,
      signal: 4,
      lastUpdate: "4 min ago",
    },
  ]);

  const [editingMeter, setEditingMeter] = useState<number | null>(null);
  const [editValues, setEditValues] = useState({ flowRate: 0, totalLitres: 0 });

  const totalSubMeterReading = subMeters.reduce((sum, meter) => sum + meter.totalLitres, 0);
  const totalSubMeterFlow = subMeters.reduce((sum, meter) => sum + meter.flowRate, 0);
  const discrepancy = mainMeterReading - totalSubMeterReading;
  const discrepancyPercentage = ((Math.abs(discrepancy) / mainMeterReading) * 100).toFixed(2);
  const hasWaterLoss = Math.abs(parseFloat(discrepancyPercentage)) > 5;

  const handleRecalibrate = () => {
    alert("System recalibration initiated...");
  };

  const startEditing = (meter: SubMeter) => {
    setEditingMeter(meter.id);
    setEditValues({ flowRate: meter.flowRate, totalLitres: meter.totalLitres });
  };

  const saveEdit = () => {
    if (editingMeter !== null) {
      setSubMeters(subMeters.map(meter =>
        meter.id === editingMeter
          ? { ...meter, flowRate: editValues.flowRate, totalLitres: editValues.totalLitres }
          : meter
      ));
      setEditingMeter(null);
    }
  };

  const cancelEdit = () => {
    setEditingMeter(null);
  };

  const getBatteryColor = (level: number) => {
    if (level >= 80) return "text-green-600 bg-green-50";
    if (level >= 50) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getSignalBars = (strength: number) => {
    return (
      <div className="flex items-end gap-0.5 h-4">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={`w-1 ${
              i < strength ? "bg-green-600" : "bg-slate-300"
            } rounded-sm transition-colors`}
            style={{ height: `${((i + 1) / 5) * 100}%` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Meter Readings</h1>
        <p className="text-slate-500 mt-2">Main meter, sub-meters, and water balance monitoring</p>
      </div>

      {hasWaterLoss && (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-5">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-red-900 text-lg">Possible Water Loss Detected</h3>
              <p className="text-red-700 mt-1">
                The main meter reading does not match the sum of sub-meters. Discrepancy: <span className="font-bold">{discrepancy} L ({discrepancyPercentage}%)</span>
              </p>
            </div>
            <button
              onClick={handleRecalibrate}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2.5 rounded-xl hover:bg-red-700 transition-all font-semibold shadow-sm flex-shrink-0"
            >
              <RefreshCw className="w-4 h-4" />
              Recalibrate
            </button>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <Gauge className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="text-blue-100 text-sm font-medium">Main Water Meter</div>
              <div className="text-white text-2xl font-bold mt-1">WM-001</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-blue-100 text-sm font-medium">Status</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-3 py-1.5 bg-green-500/90 text-white rounded-lg text-sm font-semibold">
                Online
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <div className="text-blue-100 text-sm font-medium mb-2">Current Flow Rate</div>
            <div className="text-4xl font-bold text-white">42.5</div>
            <div className="text-blue-100 text-sm mt-1">litres/min</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <div className="text-blue-100 text-sm font-medium mb-2">Total Reading</div>
            <div className="text-4xl font-bold text-white">{mainMeterReading.toLocaleString()}</div>
            <div className="text-blue-100 text-sm mt-1">litres</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
            <div className="text-blue-100 text-sm font-medium mb-2">Last Update</div>
            <div className="text-2xl font-bold text-white">Just now</div>
            <div className="text-blue-100 text-sm mt-1">Real-time monitoring</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50">
          <h2 className="font-semibold text-slate-800 text-lg">Sub-Meter Readings</h2>
          <p className="text-sm text-slate-500 mt-1">Individual meter monitoring across different zones</p>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {subMeters.map((meter) => (
            <div
              key={meter.id}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-sm">
                    <Droplet className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{meter.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{meter.lastUpdate}</p>
                  </div>
                </div>
                {editingMeter === meter.id ? (
                  <div className="flex gap-2">
                    <button
                      onClick={saveEdit}
                      className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="p-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => startEditing(meter)}
                    className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 font-medium">Flow Rate</span>
                  {editingMeter === meter.id ? (
                    <input
                      type="number"
                      value={editValues.flowRate}
                      onChange={(e) => setEditValues({ ...editValues, flowRate: parseFloat(e.target.value) })}
                      className="w-24 px-2 py-1 border border-slate-300 rounded-lg text-sm font-semibold"
                      step="0.1"
                    />
                  ) : (
                    <span className="text-lg font-bold text-blue-600">{meter.flowRate} L/min</span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 font-medium">Total Litres</span>
                  {editingMeter === meter.id ? (
                    <input
                      type="number"
                      value={editValues.totalLitres}
                      onChange={(e) => setEditValues({ ...editValues, totalLitres: parseFloat(e.target.value) })}
                      className="w-24 px-2 py-1 border border-slate-300 rounded-lg text-sm font-semibold"
                    />
                  ) : (
                    <span className="text-lg font-bold text-slate-800">{meter.totalLitres} L</span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 font-medium">Battery</span>
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${getBatteryColor(meter.battery)}`}>
                      <Battery className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{meter.battery}%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 font-medium">Signal</span>
                  {getSignalBars(meter.signal)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-green-50 to-emerald-50">
          <h2 className="font-semibold text-slate-800 text-lg">Summation & Balance Analysis</h2>
          <p className="text-sm text-slate-500 mt-1">Automatic calculation and water balance verification</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-sm">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm text-slate-600 font-semibold">Total Sub-Meter Flow</div>
              </div>
              <div className="text-3xl font-bold text-green-700">{totalSubMeterFlow.toFixed(1)}</div>
              <div className="text-sm text-slate-600 mt-1">litres/min</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl shadow-sm">
                  <Droplet className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm text-slate-600 font-semibold">Total Sub-Meter Reading</div>
              </div>
              <div className="text-3xl font-bold text-blue-700">{totalSubMeterReading.toLocaleString()}</div>
              <div className="text-sm text-slate-600 mt-1">litres</div>
            </div>

            <div className={`rounded-xl p-6 border-2 ${
              hasWaterLoss
                ? "bg-gradient-to-br from-red-50 to-orange-50 border-red-300"
                : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-300"
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-3 rounded-xl shadow-sm ${
                  hasWaterLoss
                    ? "bg-gradient-to-br from-red-500 to-orange-600"
                    : "bg-gradient-to-br from-green-500 to-emerald-600"
                }`}>
                  {hasWaterLoss ? (
                    <AlertTriangle className="w-5 h-5 text-white" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-white" />
                  )}
                </div>
                <div className="text-sm text-slate-600 font-semibold">Discrepancy</div>
              </div>
              <div className={`text-3xl font-bold ${hasWaterLoss ? "text-red-700" : "text-green-700"}`}>
                {Math.abs(discrepancy)} L
              </div>
              <div className="text-sm text-slate-600 mt-1">{discrepancyPercentage}% variance</div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-slate-800">Water Balance Comparison</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Main Meter: <span className="font-bold">{mainMeterReading.toLocaleString()} L</span> vs
                  Sub-Meters Total: <span className="font-bold">{totalSubMeterReading.toLocaleString()} L</span>
                </p>
              </div>
              {!hasWaterLoss && (
                <div className="flex items-center gap-2 text-green-700 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Balanced</span>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    hasWaterLoss
                      ? "bg-gradient-to-r from-red-500 to-orange-500"
                      : "bg-gradient-to-r from-green-500 to-emerald-500"
                  }`}
                  style={{ width: `${Math.min(parseFloat(discrepancyPercentage), 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-600">
                <span>0% (Perfect Match)</span>
                <span>5% (Threshold)</span>
                <span>10%+</span>
              </div>
            </div>

            {hasWaterLoss && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  <span className="font-semibold">⚠ Alert:</span> Discrepancy exceeds 5% threshold.
                  Potential water loss or meter calibration issue detected. Please investigate or recalibrate the system.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
