import React from "react";
import Article from "../Article/Article";
import Spinner from "../Spinner/Spinner";

interface ArticleListProps {
  articles: { status: string; data: any[] };
  loading: boolean;
  error: string | null;
}



const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  loading,
  error,
}) => {
  if (loading) return <Spinner />;
  if (error) return <p className="flex justify-center">{error}</p>;
  if (articles.data.length === 0)
    return <p className="text-center">ไม่พบข้อมูล</p>;

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
      {articles.data.map((article) => (
        <Article key={article.eid} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
