FROM node:24-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install -g pnpm
ENV CI=true
RUN pnpm install
RUN npm run build

FROM node:24-alpine AS prod
WORKDIR /app
RUN mkdir dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["npm", "start"]