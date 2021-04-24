FROM gitpod/workspace-full

USER gitpod

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
  unzip awscliv2.zip && \
  sudo ./aws/install

RUN npm i -g @architect/architect
RUN npm i -g aws-sdk
RUN echo "set ts=2" >> ~/.vimrc && echo "set sts=2" >> ~/.vimrc && echo "set et" >> ~/.vimrc
