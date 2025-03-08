import { Card } from "@/components/ui/card"
import { StatType } from "@/lib/utils";

const StatCard = ({
  title,
  value,
  Icon,
  trend,
  description
} : StatType) => (
  <Card className="relative rounded-none border-none overflow-hidden bg-gradient-to-br from-primary_accent to-primary_bg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
   
    {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary_green to-green-600 opacity-75 group-hover:opacity-100 transition-opacity" /> */}
    
    
    <div className="relative mb-4">
      <div className="relative text-primary_green group-hover:text-green-500 transition-colors">
        {<Icon/>}
      </div>
    </div>

    
    <div className="space-y-3">
      <h2 className="text-sm font-medium text-white-100 group-hover:text-white transition-colors">
        {title}
      </h2>
      
      <div className="flex items-baseline gap-2">
        <h1 className="text-3xl font-bold text-gray-100">
          {value.toLocaleString()}
        </h1>
        
        {trend && (
          <span className={`text-sm font-medium ${
            trend.isPositive ? 'text-primary_green' : 'text-red-600'
          }`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}%
          </span>
        )}
      </div>

      {description && (
        <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors line-clamp-1">
          {description}
        </p>
      )}
    </div>

    
    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </Card>
)


export default StatCard;