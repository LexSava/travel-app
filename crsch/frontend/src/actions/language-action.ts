import { Language } from "../interfaces";

export const onLanguageChanged = (lang: Language) => ({type: 'LANGUAGE_CHANGE', lang})
