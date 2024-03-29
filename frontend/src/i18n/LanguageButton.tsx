import React from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguage, getLanguageLabel } from './i18n';

export function LanguageButton() {
  const language = getLanguage();
  const otherLang = language === 'de' ? 'en' : 'de';
  const { i18n } = useTranslation();
  const toggleLang = () => i18n.changeLanguage(otherLang);

  return (
    <button type="button" onClick={toggleLang} className="border-solid border-white border-2 bg-zinc-700 rounded m-2 p-0.5 hover:bg-zinc-500 shadow-md shadow-gray-500">
      {getLanguageLabel(otherLang)}
    </button>
  );
}
