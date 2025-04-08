#!/bin/bash
mkdir /home/node/.config
cp ./.devcontainer/config/starship.toml /home/node/.config/starship.toml
echo 'Post create commands executed!'
