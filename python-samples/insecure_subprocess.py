# insecure_subprocess.py
import subprocess

def list_path(user_supplied_path):
    # Builds a shell command with user input -> shell=True
    cmd = "ls -la " + user_supplied_path
    # Bandit typically flags use of shell=True and string concatenation into shell commands
    subprocess.Popen(cmd, shell=True)

if __name__ == "__main__":
    # Example user-supplied value (in real tests, simulate attacker input)
    list_path("/tmp")
