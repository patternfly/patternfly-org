FROM centos:centos7

RUN yum -y update; yum clean all
RUN yum install -y git \
        git-core zlib zlib-devel gcc-c++ patch readline readline-devel libyaml-devel \
        openssl-devel make bzip2 autoconf automake libtool bison curl sqlite-devel \
        ; yum clean all

RUN useradd -ms /bin/bash patternfly

SHELL ["/bin/bash", "--login", "-c"]
USER patternfly
ENV HOME /home/patternfly
WORKDIR $HOME

ENV RUBY_VERSION 2.3.1
RUN git clone https://github.com/sstephenson/rbenv.git $HOME/.rbenv
RUN git clone https://github.com/sstephenson/ruby-build.git $HOME/.rbenv/plugins/ruby-build
ENV PATH $HOME/.rbenv/bin:$PATH
RUN echo 'eval "$(rbenv init -)"' >> $HOME/.bash_profile
RUN echo 'eval "$(rbenv init -)"' >> .bashrc

# Install ruby
ENV CONFIGURE_OPTS --disable-install-doc
RUN rbenv install $RUBY_VERSION
ENV RBENV_VERSION=$RUBY_VERSION

RUN gem install bundler --no-ri --no-rdoc

ENV NODE_VERSION 4.8.4
run curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
RUN nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && node --version

RUN if [[ `npm -v` != 3* ]]; then npm i -g npm@5; fi \
    && npm --version

RUN mkdir patternfly-org
# Create app directory
WORKDIR $HOME/patternfly-org

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY package.json ./
RUN npm install

COPY . .

RUN npm run grunt -- build

EXPOSE 9002

ENTRYPOINT ["/bin/bash", "-l", "-c"]
CMD [ "npm run grunt -- connect:staging watch" ]
