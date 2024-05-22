# Cambium RSC + SSR + og:image Middleware

This repo is a fork of [cambium-rsc](https://github.com/cannikin/cambium-rsc) (check out the README there for more details about the core app). This fork integrates the og:image middleware and demonstrates the fact that SSR is rendering all of the HTML for the initial request. This is a requirement for sites that care about og:images because they won't execute JavaScript.

Once you edit your photo, click the **Share** button to get a URL. Take that URL and paste it into the location bar at <https://opengraph.xyz> to see how the og:images will render on various social networks. Note that if you're developing locally you'll need to make your dev server available to the outside world so that opengraph.xyz can access it. We like [ngrok](https://ngrok.com/) but use your favorite HTTP tunneling service!

## Setup

Populate `web/public/photos` with the images of your choice, or use the ones included. Note these are &copy; Rob Cameron and are available under the [CC BY-ND 4.0 license](https://creativecommons.org/licenses/by-nc/4.0/).

## Development

The dev server is not currently functioning with RSC, so you need to do a full `build` and `serve` as if you were running in production:

```
yarn rw build
yarn rw serve
```

Your site will be available at <http://localhost:8910> as usual. After any code change you'll need to stop the server, `build` and `serve` again.
