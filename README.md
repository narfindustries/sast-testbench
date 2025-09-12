## SAST Testbench

This repository contains intentionally vulnerable or erroneous files designed to demonstrate the capabilities of various Static Application Security Testing (SAST) tools.

### Supported SAST Tools

The following tools can be used to scan the code in this repository:

- cppcheck
- flawfinder
- Semgrep
- Bandit
- safety
- shellcheck
- actionlint

The following tools will be supported in the future, we will be adding additional files for them:
- eslint
- brakeman
- rubocop
- gosec

### Usage

Clone the repository and run your preferred SAST tool against the relevant files. Each tool targets specific languages and vulnerabilities.

### Disclaimer

This repository is for educational and testing purposes only. Do not use vulnerable code in production environments.