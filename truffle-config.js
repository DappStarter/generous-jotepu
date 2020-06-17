require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember evil inner clog bubble gather'; 
let testAccounts = [
"0x2bb8671054c8fca7bac8daa6ea6a094531ef3c160fa8227194c63bc1fe5efeb7",
"0xf528cf7960a8ad163114c8d1107365f22cb3e75228ac87faf451cb442eda9251",
"0x3957b1afd52445efdae79619e8b9c9cd1595e1d4fcef8bc264acf53d33490805",
"0x302886dc2e82c2f2ccd3da3561a5c6a26120014eacb22c57233606210b758138",
"0x241d62dba61e96b644d23b3edbb372acc7686588433e0531b3b38e935ae2fcff",
"0xd17d85fb27a2a40b36f575d6cbcc4179f04ef6169796b559f1de99cb43304aa3",
"0x9d10558f74c8d5b313a84dd4d4c50b350dcd8c229bcbac65310e325b1c5a4b7c",
"0x51a164324ddfc6b16e1da9af97b2f29ca903e4eaaf597c438209db6ef308033a",
"0x98b552d93c47a6b96d997ab3f9de78f38fd14cd76468daa44d236e86c2e92ca4",
"0xbb74831cb9eb04eed3dca692fa1886d5a96de354066d37aa54c13256e409857b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
