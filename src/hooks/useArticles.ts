import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";

const useArticles = (keyword: string) => {
  const [articles, setArticles] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchArticles(keyword);
        setArticles(data);
      } catch (error) {
        setError("เกิดข้อผิดพลาดการดึงข้อมูล");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [keyword]);

  return { articles, loading, error };
};

export default useArticles;
