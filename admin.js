const admin = require('firebase-admin')

//firebase service account pk
const type = "service_account";
const project_id = "badbankfinalfinal";
const private_key_id = "d1e65d1bf4a5daef919a9a67cfae58dec9d490d0";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDb0JzgADSTQvtr\nNLIH9hb4kCpODhnt0G2IiYWPMFdHwRyJB0uMZs14yj23M2Gzc5y+90e4CgEYkNuW\nk18Ey8G7twLAnFaKeYQY3myIHJQOCMzFQYoEUwEcR3yORZ5VYeWRffvoQHqDsToo\n6o+Wvech/KR7xU0mjFx/h+ZsPUy6/SbaYS8OEvwG5UzFQU6cZC8Zk4Zc2FtLHilr\nO6BHkzsiUUjoQmcRch8vZppi9Jdj6iNmq4LhcInZCWHXCwAZGCnwF7pu+Zx9Zzrj\n6EnJwAloZ1EYg3Bruvtb+vctB71Xrc64mQZbHiCQbcra67heJwDg3cRwclsLweWR\nyB4cSEjfAgMBAAECggEAU8TvG+CIKLzEksj8tdL/Uw+hx6hRElO1gmyiRPzPrk02\nQjRRArskv80W8uu2Zox/JjmXj9fkLgf6XypfcjTyakam2l9aDaCcilutcbuuYqDQ\n5LWC0v4M9Ml7er6mRfSuZ6Fi8FIuPmS6fOBTA0fwvv+IcZCxw6iHEaTpV8OOq81b\n9lFqmXSUgMLIauAI/DvtDpzBn760H7u2Jw+2glrRv6zA39st9TfiUegpsXUT2t7p\nJKcht47OMlPT0tdOQV0PniSHwZ1bTX0OZCrXhpusbqyZEnqUpGpaaDMZQRMuFSn9\nfxnG4tadHSAt0zI2xV5b8SWaCjQhM+zjpt3k2DJw2QKBgQDzIONPF6z4tcRbfcOy\nmaVHohdf8D//70+tQ23HC5OGcJmYPrHNX8BfNf1EgBWS9LYVRUJD0DPH3IZiw8Kc\nA5omlaYjNr7vUv8f2Pn5iod2/+LOrZOwidy2z3dz+bIImTqybkQgkj9JLl6+i0wh\nDadS5PruNZRIKHAqTbEzqjqnFwKBgQDnc8G7IqlV7xQ1yfgWsNVZSbhtnanz0YUQ\nqRQ8IuiTVzMJ40w0JzE1dRF0qSZ/eKlSGRCUZaLPSiFCuqD52crwm+dzrmab5VqC\nm1tWCeswU8AuxC1OENq/qrCWaZbFjjzhiUJMjOhf1uVjJUPC4aSnSmQGyAJEhKN+\nza+GzHyJeQKBgFFuDHPrHBXY20FBaBAjgcXyNh3925Ge13LSiKwH5os6n1bseKSu\nk0HQVVliBNfJekq5fa40x4MDC0d9BWs3kaOmr5RPu7dwdt51z5OSoDhtD8vlOvf/\n1Jqt9fY0BTr4Bz7Hy62VDfk2vKjZAtB3QDl1U84Ax/86/AZPKzCArVBVAoGAXW+s\nwPhANjHbDc/oOHjQ2EfbjVz91DE8L7qiMZjCHWExeIdrJw6/Xd5R2q/Cm+lBKaR2\nvgG91UMO5FplTBgxRisaJ+g7Aip3/IvtNnGwoYTd68NEquRA+ulUepRLypseVspL\nmo2z7aTaW8kabt0a1HJCqT4rNC/7tOAiQR/iErkCgYBMHyuwLRVlQ5cL9LKXiCt2\n8ujYgr5jBHpjStamkS0H12FKMB86NB7nnEcsgi/TVNKgLqxLlsMqUGbXA+o/83u8\n2lnE1BwytLHEWc3FKoikgGVthawAKkWWh1IIGAbK7hdhiQ2ST9q5UXHQL1mf0yPr\no2TeLOEpZFzv3LfVVB7h6A==\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-n4snd@badbankfinalfinal.iam.gserviceaccount.com";
const client_id = "117519023728498984179";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n4snd%40badbankfinalfinal.iam.gserviceaccount.com"

//credential grants access to Firebase services         
admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key:
            private_key.replace(/\\n/g,'\n'),
        client_email,
        client_id,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url
    }),
})

module.exports = admin