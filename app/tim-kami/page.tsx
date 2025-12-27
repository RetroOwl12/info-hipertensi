import TeamCard from "../../components/TeamCard";

export default function TimKamiPage() {
  const team = [
    { name: "Yaldi", role: "Frontend Developer" },
    { name: "Aulia", role: "Content Writer" },
    { name: "Rizki", role: "UI/UX Designer" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Tim Kami</h1>

      <p className="text-gray-600 mb-8 max-w-2xl">
        Kami adalah tim yang berkomitmen menyediakan informasi kesehatan
        tentang hipertensi secara akurat dan mudah dipahami.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </main>
  );
}
