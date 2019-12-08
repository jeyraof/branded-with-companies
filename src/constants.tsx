export const LANGUAGE_KOREAN = 'ko';
export const LANGUAGE_ENGLISH = 'en';
export const LANGUAGE_DEFAULT = LANGUAGE_KOREAN;
export const LANGUAGES = [LANGUAGE_KOREAN, LANGUAGE_ENGLISH] as const;
export type LANUGAGE_TYPE = (typeof LANGUAGES)[number];

export const PREFIXES = {
  [LANGUAGE_KOREAN]: ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'],
  // [LANGUAGE_KOREAN]: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
  [LANGUAGE_ENGLISH]: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};