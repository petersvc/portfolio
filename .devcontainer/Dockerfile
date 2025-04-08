FROM node:22-bookworm-slim

WORKDIR /workspace

COPY . .

RUN apt-get update && apt install nano curl git -y && \
    rm -rf /var/lib/apt/lists/* && \
    npm i -g pnpm && pnpm i && \
    chown -R 1000:1000 /workspace /usr/bin /usr/local/bin

USER 1000

RUN curl -sS https://starship.rs/install.sh | sh -s -- -y && \
    echo 'eval "$(starship init bash)"' >> ~/.bashrc && \
    echo "alias run!='pnpm dev'" >> ~/.bashrc && \
    bash -c "source ~/.bashrc"

CMD ["bash", "-c", "run!"]
