FROM postgres:14.12-alpine

RUN apk add --no-cache gettext

COPY init.sql ./tmp/init.sql

RUN export DB_GRAPHILE_USER=${DB_GRAPHILE_USER} DB_GRAPHILE_PASS=${DB_GRAPHILE_PASS} && \
    envsubst < /tmp/init.sql > /docker-entrypoint-initdb.d/init.sql

EXPOSE 5432
CMD ["postgres"]
