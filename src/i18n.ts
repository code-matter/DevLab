// import { getRequestConfig } from "next-intl/server";

// export default getRequestConfig(async () => {
//   // Provide a static locale, fetch a user setting,
//   // read from `cookies()`, `headers()`, etc.
//   const locale = "fr";

//   return {
//     locale,
//     messages: (await import(`../languages/${locale}.json`)).default,
//   };
// });

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["fr", "en"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../languages/${locale}.json`)).default,
  };
});
