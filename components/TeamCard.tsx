type TeamCardProps = {
  name: string;
  role: string;
};

export default function TeamCard({ name, role }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl">
        {name.charAt(0)}
      </div>

      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
}
