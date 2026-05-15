import { FileText, Download, Calendar, TrendingDown, DollarSign, BarChart3 } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "Daily Consumption Report",
    description: "Water usage breakdown by hour and location for today",
    period: "2026-05-12",
    usage: "1,248 L",
    cost: "R 18.72",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Weekly Consumption Report",
    description: "7-day water usage analysis and trends",
    period: "2026-05-05 to 2026-05-12",
    usage: "6,320 L",
    cost: "R 94.80",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Monthly Consumption Report",
    description: "Complete monthly water usage and cost analysis",
    period: "May 2026",
    usage: "27,200 L (27.2 kL)",
    cost: "R 408.00",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Estimated Water Loss Report",
    description: "Leak detection and water loss estimates",
    period: "Last 30 days",
    usage: "835 L lost",
    cost: "R 12.53 waste",
    icon: TrendingDown,
  },
  {
    id: 5,
    title: "Cost Savings Report",
    description: "Savings from leak detection and proactive maintenance",
    period: "Last 3 months",
    usage: "2,450 L saved",
    cost: "R 36.75 saved",
    icon: DollarSign,
  },
];

export function Reports() {
  const handleDownload = (reportTitle: string) => {
    alert(`Downloading ${reportTitle}...`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Reports</h1>
        <p className="text-slate-500 mt-2">Generate and download water usage reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Available Reports</div>
              <div className="text-3xl font-bold text-slate-800">5</div>
              <div className="text-xs text-slate-500 mt-1">Ready to download</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-sm">
              <FileText className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Water Saved</div>
              <div className="text-3xl font-bold text-green-600">2.45</div>
              <div className="text-xs text-slate-500 mt-1">kilolitres</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-sm">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-slate-600 font-medium mb-3">Cost Savings</div>
              <div className="text-3xl font-bold text-green-600">R 36.75</div>
              <div className="text-xs text-slate-500 mt-1">Last 3 months</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-xl shadow-sm">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-5 flex-1">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  <report.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800">{report.title}</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{report.description}</p>
                  <div className="flex flex-wrap items-center gap-6 mt-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{report.period}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-slate-600">Usage: </span>
                      <span className="font-semibold text-slate-800">{report.usage}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-slate-600">Cost: </span>
                      <span className="font-semibold text-slate-800">{report.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDownload(report.title)}
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-sm hover:shadow-md ml-4 flex-shrink-0"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Custom Report Generator</h3>
            <p className="mt-3 text-blue-100 leading-relaxed">
              Create custom reports for specific date ranges, locations, or metrics tailored to your needs
            </p>
            <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all font-semibold shadow-md hover:shadow-lg">
              Create Custom Report
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl">
            <FileText className="w-14 h-14 text-white" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7">
        <h3 className="font-semibold text-slate-800 mb-6 text-lg">Report Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Monthly Trends</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-600">Average daily usage:</span>
                <span className="font-semibold text-slate-800">906 L</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-600">Peak usage day:</span>
                <span className="font-semibold text-slate-800">Thursday (1,050 L)</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-600">Lowest usage day:</span>
                <span className="font-semibold text-slate-800">Sunday (380 L)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Cost Analysis</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-600">Total cost (May):</span>
                <span className="font-semibold text-slate-800">R 408.00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-600">Projected annual cost:</span>
                <span className="font-semibold text-slate-800">R 4,896.00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-600">Savings from monitoring:</span>
                <span className="font-semibold text-green-600">R 36.75</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
