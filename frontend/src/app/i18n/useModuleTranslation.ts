import {
  Namespace, useTranslation, UseTranslationOptions, UseTranslationResponse,
} from 'react-i18next';

const getModule = (key?: string) => {
  if (key === undefined || key.trim().length === 0) {
    return '';
  }
  return key.endsWith('.') ? key : `${key}.`;
};

export const useModuleTranslation = (
  key?: string,
  ns?: Namespace,
  options?: UseTranslationOptions,
): UseTranslationResponse<Namespace> => {
  const module = getModule(key);
  const tr = useTranslation(ns, options);
  return {
    ...tr,
    t: (k: string, translationOptions?: any) => tr.t(module + k, translationOptions),
    ready: tr.ready,
  };
};

export const useGameTranslation = (
  key?: string,
  options?: UseTranslationOptions,
): UseTranslationResponse<Namespace> => useModuleTranslation(key, 'game', options);
