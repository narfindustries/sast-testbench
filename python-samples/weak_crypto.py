# weak_crypto.py
import hashlib
import os

def hash_password(password):
    # Using MD5 for password hashing — weak and insecure
    h = hashlib.md5()
    h.update(password.encode('utf-8'))
    return h.hexdigest()

def insecure_key_generation():
    # Using predictable os.urandom size without proper KDF or checks
    return os.urandom(8)  # very short key material

if __name__ == "__main__":
    print("md5:", hash_password("password123"))
    print("key:", insecure_key_generation().hex())
