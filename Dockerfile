FROM node:22.23.4

RUN corepack enable

WORKDIR /app

RUN yarn --frozen-lockfile && yarn cache clean

EXPOSE 4000
CMD ["yarn", "run", "start"]
