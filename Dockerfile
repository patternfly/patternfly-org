FROM centos:centos7

RUN yum -y install centos-release-scl; yum clean all
RUN yum -y update; yum clean all
RUN yum install -y rh-git29 rh-ruby23 rh-ruby23-ruby-devel rh-nodejs4; yum clean all

RUN source /opt/rh/rh-nodejs4/enable \
    && if [[ `npm -v` != 3* ]]; then npm i -g npm@3; fi \
    && npm --version

RUN useradd -ms /bin/bash patternfly

SHELL ["/bin/bash", "--login", "-c"]
USER patternfly
ENV HOME /home/patternfly
WORKDIR $HOME

RUN mkdir $HOME/.ssh \
    && chmod 700 $HOME/.ssh \
    && ssh-keyscan -t rsa github.com >> $HOME/.ssh/known_hosts

RUN echo 'source /opt/rh/rh-git29/enable' >> $HOME/.bash_profile
RUN echo 'source /opt/rh/rh-ruby23/enable' >> $HOME/.bash_profile
RUN echo 'source /opt/rh/rh-nodejs4/enable' >> $HOME/.bash_profile

RUN gem install bundler --no-ri --no-rdoc

# Create app directory
RUN mkdir patternfly-org
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
