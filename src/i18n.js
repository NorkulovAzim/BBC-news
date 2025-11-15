import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      world_news: "World News",
      politics: "Politics",
      business: "Business",
      technology: "Technology",
      sports: "Sports",
      culture: "Culture",
      health: "Health",
      science: "Science",
      saved_news: "Saved News",
      copyright: "Copyright © 2024 - The News - All rights reserved",
      nosaved: "No saved news",
      saved: "Saved News",
    },
  },
  uz: {
    translation: {
      world_news: "Xalqaro yangiliklar",
      politics: "Siyosat",
      business: "Biznes",
      technology: "Texnologiya",
      sports: "Sport",
      culture: "Madaniyat",
      health: "Sog'liq",
      science: "Fan",
      saved_news: "Saqlangan yangiliklar",
      copyright:
        "Mualliflik huquqi © 2024 - The News - Barcha huquqlar himoyalangan",
      nosaved: "Saqlangan yangiliklar yo'q",
      saved: "Saqlangan yangiliklar",
    },
  },
  ru: {
    translation: {
      world_news: "Мировые новости",
      politics: "Политика",
      business: "Бизнес",
      technology: "Технологии",
      sports: "Спорт",
      culture: "Культура",
      health: "Здоровье",
      science: "Наука",
      saved_news: "Сохраненные новости",
      copyright: "Авторские права © 2024 - The News - Все права защищены",
      nosaved: "Нет сохраненных новостей",
      saved: "Сохраненные новости",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("selectedLanguage") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
