import {useRouter} from 'next/router';
import jp from '../../public/lang/jp.js';
import vi from '../../public/lang/vi.js';

const useTrans = () => {
  const {locale, pathname, asPath, query, push} = useRouter();

  const changeLanguage = (lang) => {
    push({pathname, query}, asPath, {locale: lang});
  };

  let currentLanguage = jp;
  if (locale === 'vi') {
    currentLanguage = vi;
  }

  return {Strings: currentLanguage, language: locale, push: push, changeLanguage: changeLanguage};
};

export default useTrans;
