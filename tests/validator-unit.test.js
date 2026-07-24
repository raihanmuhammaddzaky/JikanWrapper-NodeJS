import JikanClient from '../src/JikanWrapper.js';
import { test, describe, it } from 'node:test';
import assert from 'node:assert';
import validateId from '../src/utils/commonValidator.js';

const jikan = new JikanClient();

describe("Testing Common Validator", () => {
    it("Test Skenario ID Valid", () => {
        assert.doesNotThrow(() => validateId(21));
    })

    it("Test Skenario ID 0", () => {
        assert.throws(() => validateId(0), /ID Tidak Boleh Kosong/);
    })

    it("Test Skenario ID Negatif", () => {
        assert.throws(() => validateId(-1), /ID Tidak Boleh 0 atau Negatif/);
    })

    it("Test Skenario ID Bukan Angka", () => {
        assert.throws(() => validateId("abc"), /ID Harus berupa Angka/);
    })
})






