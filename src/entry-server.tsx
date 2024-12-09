// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='en'>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content='Jack Stoller. Developer and Student. Passionate about cryptography, distributed systems, high-performance computing and new web technologies.' />
          <meta name='keywords' content='Jack Stoller Portfolio Software Engineer' />
          <link rel='icon' type='image/png' href='/images/wave.png' />
          <title>Jack Stoller</title>
          {assets}
        </head>
        <body>
          <div id='app'>{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
