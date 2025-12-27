export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
};

export const articles: Article[] = [
  {
    title: "Apa Itu Hipertensi?",
    slug: "apa-itu-hipertensi",
    excerpt: "Hipertensi adalah kondisi tekanan darah di atas normal.",
    content: "Isi lengkap artikel hipertensi.",
  },
];
