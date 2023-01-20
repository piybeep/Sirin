FROM node:lts as dependencies
WORKDIR /<sirin>
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /<sirin>
COPY . .
COPY --from=dependencies /<sirin>/node_modules ./node_modules
RUN run build

FROM node:lts as runner
WORKDIR /<sirin>
ENV NODE_ENV production

COPY --from=builder /<sirin>/public ./public
COPY --from=builder /<sirin>/package.json ./package.json
COPY --from=builder /<sirin>/.next ./.next
COPY --from=builder /<sirin>/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]