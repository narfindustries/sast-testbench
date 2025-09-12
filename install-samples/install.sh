#!/bin/bash
echo "Installing Docker..."
curl -fsSL https://get.docker.com | sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
''',
            'setup.py': '''#!/usr/bin/env python3
import subprocess
# Dangerous pattern in Python script
subprocess.run(["bash", "-c", "curl -sSL https://bootstrap.sh | bash"])