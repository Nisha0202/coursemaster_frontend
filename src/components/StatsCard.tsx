interface Props {
  title: string;
  value: number;
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
