"use client";

import { useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import { articles } from "../../data/articles";

export default function ArtikelPage() {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Artikel Hipertensi
      </h1>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Cari artikel..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* LIST ARTIKEL */}
      {filteredArticles.length === 0 ? (
        <p className="text-gray-500">
          Artikel tidak ditemukan.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              slug={article.slug}
            />
          ))}
        </div>
      )}
    </main>
  );
}
