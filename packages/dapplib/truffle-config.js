require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift reward stereo prosper hunt opinion swallow gas'; 
let testAccounts = [
"0xfee41c7f0a4ea800ce3c2bd83cbeaddbee7d4eb1cce2cf6accae14f4ec8ad09b",
"0xe6d77aa90684c347a67255918856699a921dd290fce55d21bee81b9701e985ac",
"0x1333af26ca69c668c0db2aa16a689b35c8a490f84a3a03c7603b9566048e349f",
"0x2685573bf747a0362ee7f0ed6a358ee65edf79750211e9e7414bfd7325af98f8",
"0xe51f15ea33af5fd15cecb79cbeb2377919c43c4f8a91eb06cbf8250f970743ac",
"0x8b279734ed2da2968e35e3a7abcebf729291f188be9520a4c7148b3e6384e751",
"0x3f06c137ac83a20221b31495c78a8fd4ac92fefd377b7c278fed06104aeec658",
"0x751e4b972e0a6deca349308f3dfc35e32cbcdb6bbc5c5f66d8b210aaada2eb6f",
"0xb97da8770ef882b5c2f44549e7ff19ca94ac0a471d650a696e9e3e30ab1b7f0e",
"0x45eb231ecaafccf6db2f812eecdbf7467d1bfb42851a560ab79d861b8d2fe3a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

