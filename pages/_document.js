import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <title>Rita - It's your data, own it.</title>
      <meta
        name="description"
        content="Rita helps you understand and control your online data and privacy, safely and immediately. Whenever you want."
      />
      <meta name="author" content="Rita Team" />
      <meta
        name="keywords"
        content="Rita, Personal, Data, Privacy, Social Networks, Facebook, Instagram, Google, Social, Security, Free"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={true}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Inter&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
