import React from "react";
import { useSearchParams } from "react-router-dom";
import ArticleList from "./components/ArticleList/ArticleList";
import Search from "./components/Search/Search";
import useArticles from "./hooks/useArticles";
import useDebounce from "./hooks/useDebound";

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const debouncedKeyword = useDebounce(keyword, 500);
  const { articles, loading, error } = useArticles(debouncedKeyword);

  const handleSearch = (newKeyword: string) => {
    setSearchParams({ keyword: newKeyword });
  };

  return (
    <div className="bg-white p-6">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-center my-8 text-blue-600">
          เที่ยวไหนดี
        </h1>
        <Search onSearch={handleSearch} />
        <ArticleList articles={articles} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default App;
