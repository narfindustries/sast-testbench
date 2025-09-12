# insecure_eval_pickle.py
import pickle
import sys

def loads_from_input():
    # reading arbitrary bytes (simulated) and unpickling them
    data = sys.stdin.buffer.read()
    # Dangerous: untrusted pickle loads can execute arbitrary code
    obj = pickle.loads(data)
    print("Loaded:", obj)

def do_eval():
    user = input("Enter python expression: ")
    # Dangerous: eval() executes arbitrary python expressions
    result = eval(user)
    print("Result:", result)

if __name__ == "__main__":
    # For testing: call do_eval(); to test pickle, pipe bytes into the script.
    do_eval()
