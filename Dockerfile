FROM node:20.18.0

RUN corepack enable

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile && yarn cache clean

EXPOSE 4000
CMD ["yarn", "run", "start"]
