import { Card } from "@/components/ui/card"

const StatCard = ({
  title,
  value,
  Icon,
  trend,
  description
}: {
  title: string
  value: number
  Icon: React.ReactNode
  trend?: { value: number; isPositive: boolean }
  description?: string
}) => (
  <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    {/* Accent border */}
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 opacity-75 group-hover:opacity-100 transition-opacity" />
    
    {/* Icon with background effect */}
    <div className="relative mb-4">
      <div className="absolute -inset-3 bg-blue-100/50 rounded-full blur-lg group-hover:bg-blue-100/75 transition-colors" />
      <div className="relative text-blue-600 group-hover:text-blue-700 transition-colors">
        {Icon}
      </div>
    </div>

    {/* Content */}
    <div className="space-y-3">
      <h2 className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
        {title}
      </h2>
      
      <div className="flex items-baseline gap-2">
        <h1 className="text-3xl font-bold text-gray-900">
          {value.toLocaleString()}
        </h1>
        
        {trend && (
          <span className={`text-sm font-medium ${
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}%
          </span>
        )}
      </div>

      {description && (
        <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
          {description}
        </p>
      )}
    </div>

    {/* Decorative corner accent */}
    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </Card>
)


export default StatCard;