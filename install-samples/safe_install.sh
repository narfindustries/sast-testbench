#!/bin/bash
# Safe installation with checksum
URL="https://example.com/package.tar.gz"
EXPECTED_SHA="a1b2c3d4e5f6789abcdef1234567890abcdef1234567890abcdef1234567890"

curl -sSL "$URL" -o package.tar.gz
echo "$EXPECTED_SHA  package.tar.gz" | sha256sum -c
if [ $? -eq 0 ]; then
    tar -xzf package.tar.gz
    ./install.sh
fi