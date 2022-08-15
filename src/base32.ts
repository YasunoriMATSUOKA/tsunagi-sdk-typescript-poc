interface Obj {
  [prop: string]: number;
}

const charMapping = {
  createBuilder: () => {
    const map: Obj = {};
    return {
      map,
      addRange: (start: string, end: string, base: number) => {
        const startCode = start.charCodeAt(0);
        const endCode = end.charCodeAt(0);
        for (let code = startCode; code <= endCode; ++code) map[String.fromCharCode(code)] = code - startCode + base;
      },
    };
  },
};

// https://github.com/symbol/symbol/blob/dev/sdk/javascript/src/utils/base32.js
const DECODED_BLOCK_SIZE = 5;
const ENCODED_BLOCK_SIZE = 8;

const charToDecodedCharMap = ((): Obj => {
  const builder = charMapping.createBuilder();
  builder.addRange('A', 'Z', 0);
  builder.addRange('2', '7', 26);
  return builder.map;
})();

const decodeChar = (c: string) => {
  const decodedChar = charToDecodedCharMap[c];
  if (undefined !== decodedChar) return decodedChar;
  throw Error(`illegal base32 character ${c}`);
};

const decodeBlock = (input: string, inputOffset: number, output: Uint8Array, outputOffset: number) => {
  const bytes = new Uint8Array(ENCODED_BLOCK_SIZE);
  for (let i = 0; i < ENCODED_BLOCK_SIZE; ++i) bytes[i] = decodeChar(input[inputOffset + i]);

  output[outputOffset + 0] = (bytes[0] << 3) | (bytes[1] >> 2);
  output[outputOffset + 1] = ((bytes[1] & 0x03) << 6) | (bytes[2] << 1) | (bytes[3] >> 4);
  output[outputOffset + 2] = ((bytes[3] & 0x0f) << 4) | (bytes[4] >> 1);
  output[outputOffset + 3] = ((bytes[4] & 0x01) << 7) | (bytes[5] << 2) | (bytes[6] >> 3);
  output[outputOffset + 4] = ((bytes[6] & 0x07) << 5) | bytes[7];
};

const testUint8Array = new Uint8Array(5);
const testUint8ArrayElement = testUint8Array[2];
console.log(testUint8ArrayElement);

export const base32 = {
  decode: (encoded: string) => {
    if (encoded.length % ENCODED_BLOCK_SIZE !== 0) throw Error(`encoded size must be multiple of ${ENCODED_BLOCK_SIZE}`);

    const output = new Uint8Array((encoded.length / ENCODED_BLOCK_SIZE) * DECODED_BLOCK_SIZE);
    for (let i = 0; i < encoded.length / ENCODED_BLOCK_SIZE; ++i)
      decodeBlock(encoded, i * ENCODED_BLOCK_SIZE, output, i * DECODED_BLOCK_SIZE);

    return output;
  },
};
