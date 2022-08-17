#DOCKER FILE CONFIGS ACORDING TO: https://docs.docker.com/engine/reference/builder/

FROM node:latest

RUN apt-get update &&\
  apt-get -f install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
  libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
  libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
  libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
  ca-certificates fonts-liberation libnss3 lsb-release xdg-utils wget \
  xvfb x11vnc x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps dpkg

RUN apt-get -f install -yq libgbm-dev
RUN apt-get -f install -yq libdbusmenu-glib4 libgtk2.0-0 libdbusmenu-gtk4

RUN curl -p --insecure "http://ftp.de.debian.org/debian/pool/main/libi/libindicator/libindicator7_0.5.0-4_amd64.deb" --output libindicator7_0.5.0-4_amd64.deb
RUN dpkg --install libindicator7_0.5.0-4_amd64.deb

RUN curl -p --insecure "http://ftp.br.debian.org/debian/pool/main/liba/libappindicator/libappindicator1_0.4.92-7_amd64.deb" --output libappindicator1_0.4.92-7_amd64.deb
RUN dpkg --install libappindicator1_0.4.92-7_amd64.deb

RUN ls

WORKDIR /app/

COPY package*.json ./

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
      then npm install; \
      else npm install --only=production; \
    fi

RUN ls

COPY . .

ENV NODE_ENV production
ENV DISPLAY :99

CMD ls & npm run docker_pre_run & Xvfb :99 -screen 0 1024x768x16 -nolisten unix & npm run docker_run
