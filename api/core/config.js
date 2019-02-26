module.exports = {
    jwt: {
        secret: '7vRRAyB7Y90qa6q9eG3LyF3S0n912ri7PUbNeydDKvb1GmxNNyBquABp7EPPYvWC6BEQrpliGw6v0t6lGYRSNEn7t8ZXNfYD1LDuddOaSf7C6iJTzGyq7CSrCgqljAz1dbYW9IT4HWzAEf62kn7ZtvyTj6nLR5TiIvrOC5EHusvRhWy9PyDi7zwRzPPQMQ4gpz5oL6DpXWQSOFIVUWne9Ile2ErNNCnKhLGCAzyV9NfHOslzb6X0AJcTJI5kGfEO',
        duration: '24h',
        tokenAge: 86400000,
        refreshSecret: 'bda5rZ8idNMYnaNlAJu7V070kucKqkpmMSUoEB7VKoD9akE7NMYCncUNeMIgVMvjnfO220ZEucZxpvwiHPbePONXJIyW19KX0lE84UQ9OsC1oBXLQpo4z44jQQNP59BIb2rZBhq2ekOaQI5oVP7ndlNAfjGSisDgO26AmNvsKfuxNLpezrTAwmaz0rcyWtsvcgaEQjXwg8jZ7yuP87a6JEY5EmZUKXQb7Mnt3sxnDrk0XejeHbhGnAldgnoPFpwr',
        refreshDuration: '48h',
        refreshTokenAge: 315423072000,
    },
    sessionCookie: {
        keys: [
            'HB5KLVnkJrYz0fzuHvt3R3ct4t2wTJwx2HP7B4ECOgRYEbHIy8hyBz3GwQXZ7NAGeYM4HMtkPRxWNL3bbiDeuaPdj2kZpKwtrmjc661XjTpH2aYLsm8cO0Jv7OG8Js5lxEgnJFNB4MvuHLH6yYzCfArR0gwWRWxC4siv8KTTRWkhttHT9LdGsvYKg26TdCOPvjAUNhAQCKo639HskFxhbJb3NRckjcmqqtiKlP1XHKrTi6n0ukSI3eaXsdRq5Z6H',
            'RWKwQvapgP8awnbYrjEN6HKpcboey8Q1w1TDtOudN6W27RPOcHyjDBRX8kKzSTeSGgfE5ffJoKziDbtLl3QpJ32fRokKo4hR4HRyJZtEGIhIer8GsXYhPq8BDgN6XyynVedmx7IMWA20HA97MffqdRvdcBAEDRNGeaPF4TS81DKmtulLxCo9cNA0K5lLwWT1mRNHtlrS4zDrS43uISuYQAfmdw9PZ9eSZ8wdQoNo2yFpBqJShWVVl8h6XeTLZUqm',
            'yIE0zxARwDuGiCzugNBLCeNIJoxx53PUPtOC0iQCaoUBDtBTAbohaWSgOoLf3G4mePTMQU8HBxaWR7wShi3PCrs09NdYjfk0uXvFvqaWknmh7I3wwoQfwuijsiSoKtgJHa0pgBa0jwTr5csCtLS46jtzIy2BiIKjTiag2FG9a4aWtAGCBTFEMbPeSoI4M3DC1oJMhyQpwhwfg4uZQ97gODdH1F4rpme5GXFpgIKfsMgHdejqIssLDF54nZMGdp0R'
        ]
    },
    mailGun: {
        apiKey: 'key-4802a4b9c49976f0cc669d97c5481190',
        domain: 'sandboxd13dac3dc6c4496495f6d4e63e97c33d.mailgun.org'
    },
    mongoose: {
        url: 'mongodb://localhost:27017/MARS?authSource=admin'
    }
}