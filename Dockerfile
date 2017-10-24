# Use the travis ruby image as a base to mimic production deployment
FROM quay.io/travisci/travis-ruby

SHELL ["/bin/bash", "--login", "-c"]
USER travis
ENV HOME /home/travis

ENV INSTALL_RUBY_VERSION 2.3.1
RUN echo $PATH \
    && rvm install $INSTALL_RUBY_VERSION \
    && rvm --default use $INSTALL_RUBY_VERSION \
    && ruby --version

RUN gem install bundle

ENV NODE_VERSION 4.8.4
RUN nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && node --version

RUN if [[ `npm -v` != 3* ]]; then npm i -g npm@5; fi \
    && npm --version

# Create app directory
WORKDIR $HOME/builds

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY package.json ./
RUN npm install

COPY . .

RUN npm run grunt -- build

EXPOSE 9002

ENTRYPOINT ["/bin/bash", "-l", "-c"]
CMD [ "npm run grunt -- connect:staging watch" ]
