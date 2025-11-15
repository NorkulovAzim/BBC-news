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
      shortnews: "Short News",
      hotnews: "Latest News",
      viewall: "View All",
      technoNews: "Technology News",
      otherNews: "Other News",
      culture1: "Culture",
      loading: "Loading...",
      savedFull: "Saved News",
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
      shortnews: "Qisqa yangiliklar",
      hotnews: "So'ngi yangiliklar",
      viewall: "Barchasi",
      technoNews: "Texnologik yangiliklar",
      otherNews: "Boshqa yangiliklar",
      culture1: "Madaniyat",
      loading: "Yuklanmoqda...",
      savedFull: "Saqlangan yangiliklar",
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
      saved: "Сох.. новости",
      shortnews: "Короткие новости",
      hotnews: "последние новости",
      viewall: "Просмотреть все",
      technoNews: "Новости ТЕХНОЛОГИЙ",
      otherNews: "Другие новости",
      culture1: "Культура",
      loading: "Загрузка...",
      savedFull: "Сохраненные новости",
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
