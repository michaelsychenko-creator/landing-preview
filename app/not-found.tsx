import {routing} from "@/i18n/routing";

export default function RootNotFound() {
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <p>404</p>
      </body>
    </html>
  );
}
