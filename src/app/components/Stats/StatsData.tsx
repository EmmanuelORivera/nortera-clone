interface StatsDataProps {
  data: string
  description: string
}
const StatsData = ({ data, description }: StatsDataProps) => {
  return (
    <div>
      <p>{data}</p>
      <p>{description}</p>
    </div>
  )
}

export default StatsData
