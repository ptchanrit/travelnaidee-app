import React from "react";
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  article: {
    title: string;
    eid: string;
    description: string;
    photos: string[];
    tags: string[];
    url: string;
  };
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const navigate = useNavigate();
  const handleTagClick = (tag: string) => {
    navigate(`/?keyword=${tag}`);
  };

  return (
    <div className="flex flex-col max-w-xl mx-auto rounded-lg shadow-md border-2 border-gray-100 overflow-hidden min-h-[500px]">
      <a href={article.url}>
        <div className="flex-shrink-0 h-48">
          <img
            src={article.photos[0]}
            alt={`article ${article.eid} main image`}
            className="w-full h-full rounded-t-lg object-cover"
          />
        </div>
      </a>

      <div className="flex flex-col justify-between p-6 bg-white flex-grow">
        <a href={article.url}>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {article.title}
          </h2>
        </a>
        <p className="text-gray-700 mb-4">
          {article.description}{" "}
          <a
            href={article.url}
            className="font-bold text-blue-600 cursor-pointer"
          >
            อ่านต่อ..
          </a>
        </p>
        <div className="flex flex-wrap mb-4">
          {article.tags.map((tag, idx) => (
            <button
              key={idx}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
        <div className="flex space-x-4 justify-center mt-4">
          {article.photos.slice(1).map((img, idx) => (
            <div key={idx} className="flex">
              <img
                src={img}
                alt={`article ${article.eid} image ${idx + 1}`}
                className="w-48 h-48 rounded-lg object-cover shadow-sm transition-transform duration-200 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
