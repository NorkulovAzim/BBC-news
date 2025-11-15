import { useContext } from "react";

const SavedPage = () => {
  const { savedNews } = useContext(SavedContext);

  return (
    <div className="saved-page">
      <h2>Saved News ({savedNews.length})</h2>
      {savedNews.length === 0 ? (
        <p>No saved news yet.</p>
      ) : (
        savedNews.map((news) => (
          <div key={news.id} className="saved-news-card">
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            {news.images?.[0] && <img src={news.images[0]} alt={news.title} />}
          </div>
        ))
      )}
    </div>
  );
};

export default SavedPage;
