import { greetingTranslation } from './translation';

export function getTimeOfDay(lang = 'en') {
  const date = new Date();
  const result = [date.getHours(), date.getMinutes() ].map(function (x) {
    return x < 10 ? "0" + x : x
  }).join("");
  if (result > 600 && result < 1159) {
    return greetingTranslation[lang][0]
  }
  if (result > 1200 && result < 1759) {
    return greetingTranslation[lang][1]
  }
  if (result > 1800 && result < 2359) {
    return greetingTranslation[lang][2]
  }
  return greetingTranslation[lang][3]
}