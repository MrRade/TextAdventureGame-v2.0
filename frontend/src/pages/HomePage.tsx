import React from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

export function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="text-center ">
      <button
        onClick={() => navigate("/gamelist")}
        className="border-solid border-white border-2 bg-zinc-700 rounded m-2 p-0.5 hover:bg-zinc-500 shadow-md shadow-gray-500"
        type="button"
      >
        {t("gameListButton")}
      </button>
    </div>
  );
}
