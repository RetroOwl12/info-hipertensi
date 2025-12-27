import Link from "next/link";

export type ArticleCardProps = {
  title: string;
  excerpt: string;
  slug: string;
};

export default function ArticleCard({
  title,
  excerpt,
  slug,
}: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {excerpt}
      </p>

      <Link
        href={`/artikel/${slug}`}
        className="text-blue-600 hover:underline"
      >
        Baca selengkapnya →
      </Link>
    </div>
  );
}
