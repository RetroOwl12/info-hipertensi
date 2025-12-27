import { articles } from "../../../data/articles";

export default function DetailArtikelPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find(
    (item) => item.slug === params.slug
  );

  if (!article) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold">
          Artikel tidak ditemukan
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        {article.title}
      </h1>

      <article className="text-gray-700 leading-relaxed space-y-4">
        <p>{article.content}</p>
      </article>
    </main>
  );
}
