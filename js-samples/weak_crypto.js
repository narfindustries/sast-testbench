const crypto = require('crypto');

function insecureHash(password) {
    // VULNERABILITY: Insecure Hashing - using MD5 directly for passwords
    // MD5 is known to be cryptographically broken (collision attacks) and too fast for passwords.
    return crypto.createHash('md5').update(password).digest('hex');
}

function insecureEncryption(text, key) {
    // VULNERABILITY: Insecure Encryption - using a static IV and weak/deprecated cipher
    // ECB mode is deterministic and leaks patterns. Fixed IV allows replay attacks.
    const cipher = crypto.createCipheriv('aes-128-ecb', key, ''); // No IV for ECB
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

const weakKey = 'averyweakkey1234'; // VULNERABILITY: Hardcoded/Weak Key

const passwordHash = insecureHash("mySecretPassword");
console.log("Insecure MD5 Hash:", passwordHash);

const encryptedData = insecureEncryption("Sensitive data", Buffer.from(weakKey, 'utf8').slice(0,16)); // Key must be 16 bytes for aes-128
console.log("Insecure ECB Encryption:", encryptedData);