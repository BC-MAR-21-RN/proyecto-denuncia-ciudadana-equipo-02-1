import I18n from 'react-native-i18n';
import es from '../config/language/es';
import en from '../config/language/en';

I18n.fallbacks = true;
I18n.missingBehaviour = 'guess';
I18n.defaultLocale = 'es';
I18n.locale = 'es';

I18n.translations = {
  es,
  en,
};

export const setLocale = locale => {
  I18n.locale = locale;
};

export const getCurrentLocale = () => I18n.locale;

export const translateHeaderText =
  langKey =>
  ({screenProps}) => {
    const title = I18n.translate(langKey, screenProps.language);
    return {title};
  };

export default I18n.translate.bind(I18n);
