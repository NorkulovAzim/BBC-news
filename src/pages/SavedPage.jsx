// import React from "react";

// const SavedPage = () => {

//   return (
//     <section>
//       <div className="container">
//         <h2>{t("saved_news")}</h2>
//         <p>{t("nosaved")}</p>
//       </div>
//     </section>
//   );
// };

// export default SavedPage;

import { useSaved } from "../context/SavedContext";
import { useTranslation } from "react-i18next";

const SavedPage = () => {
  const { savedItems, removeSaved } = useSaved();
  const { t } = useTranslation();

  if (savedItems.length === 0) {
    return (
      <section className="nosaved-section">
        <div className="container">
          <h2>{t("nosaved")}</h2>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <h2 className="saved-news">{t("savedFull")}</h2>

        {savedItems.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <h3 className="saved-news-title">
              {item.title}

              <button onClick={() => removeSaved(item.id)}>
                {t("removeNews")}
                <i className="fa-solid fa-delete-left"></i>
              </button>
            </h3>

            <img
              src={item.images?.[0]}
              alt={item.title}
              style={{ width: "300px", borderRadius: "6px" }}
            />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavedPage;
