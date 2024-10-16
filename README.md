![E2E Tests](https://github.com/jviall/njooi-takehome/actions/workflows/playwright.yml/badge.svg)

# AQI Explorer

## Table Stakes

You need a couple basic things to get up and running:

1. [node.js](https://nodejs.org/en) (preferably LTS)
2. `yarn` (via corepack)

```sh
corepack enable
```

3. A `.env` file in the root of the project directory containing an API token from [aqicn.org](https://aqicn.org/data-platform/token/), e.g.

```
AQI_TOKEN=[YOUR_TOKEN_HERE]
```

Then be on your merry way!

## Getting Started

Run these commands from the root of the project directory.

| Command         | Purpose                                    |
| --------------- | ------------------------------------------ |
| `yarn dev`      | Run in development mode                    |
| `yarn build`    | Create a production build                  |
| `yarn start`    | Run a production build                     |
| `yarn test`     | Runs the unit tests                        |
| `yarn coverage` | Runs the unit tests with code coverage     |
| `yarn e2e `     | Runs the end-to-end tests                  |
| `yarn e2e:ui`   | Runs end-to-end tests in an interactive UI |

## Built With

- [Remix](https://remix.run)
- [Playwright]()
- [Zod]()
