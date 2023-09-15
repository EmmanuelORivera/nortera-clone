interface StatsDataProps {
  data: string
  description: string
}
const StatsData = ({ data, description }: StatsDataProps) => {
  return (
    <div>
      <p className="text-4xl font-semibold">{data}</p>
      <p className="text-sm uppercase font-semibold">{description}</p>
    </div>
  )
}

export default StatsData
