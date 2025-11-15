import React from "react";
import { useTranslation } from "react-i18next";

const SavedPage = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <h2>{t("saved_news")}</h2>
        <p>{t("nosaved")}</p>
      </div>
    </section>
  );
};

export default SavedPage;
