import {
  Droplet,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Activity,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const hourlyData = [
  { hour: "00:00", usage: 45 },
  { hour: "04:00", usage: 38 },
  { hour: "08:00", usage: 125 },
  { hour: "12:00", usage: 180 },
  { hour: "16:00", usage: 95 },
  { hour: "20:00", usage: 72 },
];

const dailyData = [
  { day: "Mon", usage: 850 },
  { day: "Tue", usage: 920 },
  { day: "Wed", usage: 780 },
  { day: "Thu", usage: 1050 },
  { day: "Fri", usage: 890 },
  { day: "Sat", usage: 450 },
  { day: "Sun", usage: 380 },
];

const monthlyData = [
  { month: "Jan", usage: 24500 },
  { month: "Feb", usage: 22800 },
  { month: "Mar", usage: 26100 },
  { month: "Apr", usage: 25300 },
  { month: "May", usage: 27200 },
];

export function Dashboard() {
  const mainMeterReading = 1248;
  const subMeterTotal = 1193;
  const discrepancy = mainMeterReading - subMeterTotal;
  const discrepancyPercentage = ((Math.abs(discrepancy) / mainMeterReading) * 100).toFixed(1);
  const hasWaterLoss = Math.abs(parseFloat(discrepancyPercentage)) > 5;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-2">Real-time water monitoring and analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium mb-3">
                <Activity className="w-4 h-4" />
                Current Flow Rate
              </div>
              <div className="text-3xl font-bold text-slate-800">42.5</div>
              <div className="text-sm text-slate-500 mt-1">litres/min</div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-2 font-medium">
                <ArrowDownRight className="w-3 h-3" />
                <span>Normal range</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-sm">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium mb-3">
                <Droplet className="w-4 h-4" />
                Today's Usage
              </div>
              <div className="text-3xl font-bold text-slate-800">1,248</div>
              <div className="text-sm text-slate-500 mt-1">litres (1.25 kL)</div>
              <div className="flex items-center gap-1 text-xs text-amber-600 mt-2 font-medium">
                <ArrowUpRight className="w-3 h-3" />
                <span>8% vs yesterday</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-sm">
              <Droplet className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium mb-3">
                
                Today's Cost
              </div>
              <div className="text-3xl font-bold text-slate-800">R 18.72</div>
              <div className="text-sm text-slate-500 mt-1">@ R 15.00/kL</div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-2 font-medium">
                <span>Within budget</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-xl shadow-sm">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium mb-3">
                <TrendingUp className="w-4 h-4" />
                Monthly Usage
              </div>
              <div className="text-3xl font-bold text-slate-800">27.2</div>
              <div className="text-sm text-slate-500 mt-1">kilolitres</div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-2 font-medium">
                <ArrowDownRight className="w-3 h-3" />
                <span>5% vs last month</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-xl shadow-sm">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className={`rounded-2xl shadow-lg p-7 border-2 ${
        hasWaterLoss
          ? "bg-gradient-to-br from-red-50 via-orange-50 to-red-50 border-red-300"
          : "bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 border-green-300"
      }`}>
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-xl shadow-md ${
              hasWaterLoss
                ? "bg-gradient-to-br from-red-500 to-orange-600"
                : "bg-gradient-to-br from-green-500 to-emerald-600"
            }`}>
              {hasWaterLoss ? (
                <AlertTriangle className="w-8 h-8 text-white" />
              ) : (
                <CheckCircle className="w-8 h-8 text-white" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Water Balance Monitor</h2>
              <p className="text-slate-600 mt-1">Main meter vs sub-meters comparison</p>
            </div>
          </div>
          <div className={`px-5 py-3 rounded-xl font-bold text-lg ${
            hasWaterLoss
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}>
            {discrepancyPercentage}%
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-slate-200">
            <div className="text-sm text-slate-600 font-medium mb-2">Main Meter Reading</div>
            <div className="text-3xl font-bold text-slate-800">{mainMeterReading.toLocaleString()}</div>
            <div className="text-sm text-slate-500 mt-1">litres</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-slate-200">
            <div className="text-sm text-slate-600 font-medium mb-2">Sub-Meters Total</div>
            <div className="text-3xl font-bold text-blue-600">{subMeterTotal.toLocaleString()}</div>
            <div className="text-sm text-slate-500 mt-1">litres (4 meters)</div>
          </div>
          <div className={`backdrop-blur-sm rounded-xl p-5 border-2 ${
            hasWaterLoss
              ? "bg-red-100/80 border-red-400"
              : "bg-green-100/80 border-green-400"
          }`}>
            <div className="text-sm text-slate-700 font-medium mb-2">Water Loss</div>
            <div className={`text-3xl font-bold ${hasWaterLoss ? "text-red-700" : "text-green-700"}`}>
              {Math.abs(discrepancy)} L
            </div>
            <div className="text-sm text-slate-600 mt-1">
              {hasWaterLoss ? "Action required" : "Within normal range"}
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700">Balance Indicator</span>
            <span className="text-xs text-slate-600">0% = Perfect Match | 5%+ = Alert Threshold</span>
          </div>
          <div className="relative">
            <div className="w-full bg-slate-200 rounded-full h-8 overflow-hidden shadow-inner">
              <div
                className={`h-full rounded-full transition-all duration-500 flex items-center justify-end pr-3 ${
                  hasWaterLoss
                    ? "bg-gradient-to-r from-red-500 via-orange-500 to-red-600"
                    : "bg-gradient-to-r from-green-500 via-emerald-500 to-green-600"
                }`}
                style={{ width: `${Math.min(parseFloat(discrepancyPercentage) * 10, 100)}%` }}
              >
                {parseFloat(discrepancyPercentage) > 2 && (
                  <span className="text-white font-bold text-sm">{discrepancyPercentage}%</span>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-600">
              <span>0%</span>
              <span className="absolute left-1/2 -translate-x-1/2">5% Threshold</span>
              <span>10%+</span>
            </div>
          </div>
        </div>

        {hasWaterLoss && (
          <div className="mt-5 p-4 bg-red-600 text-white rounded-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Water Loss Alert</p>
                <p className="text-sm text-red-100 mt-1">
                  The discrepancy between main and sub-meters exceeds 5%. Please check for leaks or recalibrate meters.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-slate-800 text-base">Leak Detection</h3>
            <div className="p-2 bg-green-50 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">Status</span>
              <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-semibold">
                Normal
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">Last Check</span>
              <span className="text-sm text-slate-800 font-semibold">2 min ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">Alerts Today</span>
              <span className="text-sm text-slate-800 font-semibold">3</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-slate-800 text-base">Valve Control</h3>
            <div className="p-2 bg-green-50 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">Main Valve</span>
              <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-semibold">
                Open
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">Secondary Valve</span>
              <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-semibold">
                Open
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">Last Action</span>
              <span className="text-sm text-slate-800 font-semibold">1 hour ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-slate-800 text-base">System Health</h3>
            <div className="p-2 bg-green-50 rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">Smart Meter</span>
              <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-semibold">
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">Gateway</span>
              <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-semibold">
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">Signal Strength</span>
              <span className="text-sm text-slate-800 font-semibold">Excellent</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-7 border border-slate-100">
        <h3 className="font-semibold text-slate-800 mb-6 text-lg">Water Usage by Hour (Today)</h3>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={hourlyData}>
            <defs>
              <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="hour"
              stroke="#94a3b8"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              stroke="#94a3b8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="usage"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#colorUsage)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-7 border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-6 text-lg">Daily Usage (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis
                dataKey="day"
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar dataKey="usage" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-7 border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-6 text-lg">Monthly Usage Trend</h3>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Line
                type="monotone"
                dataKey="usage"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5, strokeWidth: 2, stroke: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
