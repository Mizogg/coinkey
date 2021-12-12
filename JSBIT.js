"use strict";

const CoinKey = require('coinkey')
const fs = require('fs');
let i = []

//let privateKeyHex = ('0000000000000000000000000000000000000000000000000000000000000007')
let privateKeyHex = r(64)

let ck = new CoinKey(Buffer.from(privateKeyHex, 'hex'))
let ck1 = new CoinKey(Buffer.from(privateKeyHex, 'hex'))

ck.compressed = false
ck1.compressed = true

console.log("\x1b[31m%s\x1b[0m", "\n\nPrivate Key Hex : " + privateKeyHex + "\n>> Uncompressed : " + ck.publicAddress + "\nUncompressed WIF : " + ck.privateWif + "\n>>  Compressed  : " + ck1.publicAddress + "\nCompressed WIF : " + ck1.privateWif)

fs.readFile('puzzle.txt', 'utf8', function (err, data) {
	if (err) throw err;


if(data.includes(ck.publicAddress)){
	console.log("")
	process.stdout.write('\x07');
	console.log("\x1b[32m%s\x1b[0m", ">> Winner: " + "\n\nPrivate Key Hex : " + privateKeyHex + "\n>> Uncompressed : " + ck.publicAddress + "\nUncompressed WIF : " + ck.privateWif + "\n>>  Compressed  : " + ck1.publicAddress + "\nCompressed WIF : " + ck1.privateWif)
	let successString = "\n\nPrivate Key Hex" + privateKeyHex + "\nWallet Uncompressed: " + ck.publicAddress + "\nUncompressed WIF: " + ck.privateWif
	

	fs.appendFileSync('Winner.txt', successString, (err) => {
		if (err) throw err; 
	})
	
	process.exit()
	}
});

fs.readFile('puzzle.txt', 'utf8', function (err, data) {
if (err) throw err;

if(data.includes(ck1.publicAddress)){
	console.log("")
	process.stdout.write('\x07');
	console.log("\x1b[32m%s\x1b[0m", ">> Winner: " + "\n\nPrivate Key Hex : " + privateKeyHex + "\n>> Uncompressed : " + ck.publicAddress + "\nUncompressed WIF : " + ck.privateWif + "\n>>  Compressed  : " + ck1.publicAddress + "\nCompressed WIF : " + ck1.privateWif)
	let successString1 = "\n\nPrivate Key Hex" + privateKeyHex + "\nWallet Compressed: " + ck1.publicAddress + "\nCompressed WIF: " + ck1.privateWif
	

	fs.appendFileSync('Winner.txt', successString1, (err) => {
		if (err) throw err; 
	})		

	process.exit()
	}
});



function r(l) {
    let randomChars = 'ABCDF0123456789';
    let result = '';
    for ( var i = 0; i < l; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}