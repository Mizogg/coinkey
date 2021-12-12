"use strict";

const CoinKey = require('coinkey')
const fs = require('fs');
const fetch = require('node-fetch')
let i = []

//let privateKeyHex = ('0000000000000000000000000000000000000000000000000000000000000003')
let privateKeyHex = r(64)

let ck = new CoinKey(Buffer.from(privateKeyHex, 'hex'))
let ck1 = new CoinKey(Buffer.from(privateKeyHex, 'hex'))

ck.compressed = false
ck1.compressed = true

while(i < 1){
  console.log("\x1b[31m%s\x1b[0m", "\n\nPrivate Key Hex : " + privateKeyHex + "\n>> Uncompressed : " + ck.publicAddress + "\nUncompressed WIF : " + ck.privateWif + "\n>>  Compressed  : " + ck1.publicAddress + "\nCompressed WIF : " + ck1.privateWif)
  var urlBal = 'https://blockchain.info/q/getreceivedbyaddress/'
  urlBal = urlBal.concat(ck.publicAddress);
  fetch(urlBal)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    if (json > 0){
		console.log("=====Bitcoin Address with Total Received Ammount===== Congraz!!!!!!");
		console.log("")
		process.stdout.write('\x07');
		console.log("\x1b[32m%s\x1b[0m", ">> Winner: " + "\n\nPrivate Key Hex : " + privateKeyHex + "\n>> Uncompressed : " + ck.publicAddress + "\nUncompressed WIF : " + ck.privateWif + "\n>>  Compressed  : " + ck1.publicAddress + "\nCompressed WIF : " + ck1.privateWif)
		let successString = "\n\nPrivate Key Hex: " + privateKeyHex + "\nWallet Uncompressed: " + ck.publicAddress + "\nUncompressed WIF: " + ck.privateWif
		

		fs.appendFileSync('Winner.txt', successString, (err) => {
			if (err) throw err; 
		})
			
    }
  })
  var urlBal1 = 'https://blockchain.info/q/getreceivedbyaddress/'
  urlBal1 = urlBal1.concat(ck1.publicAddress);
  fetch(urlBal1)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    if (json > 0){
		console.log("=====Bitcoin Address with Total Received Ammount===== Congraz!!!!!!");
		console.log("")
		process.stdout.write('\x07');
		console.log("\x1b[32m%s\x1b[0m", ">> Winner: " + "\n\nPrivate Key Hex : " + privateKeyHex + "\n>> Uncompressed : " + ck.publicAddress + "\nUncompressed WIF : " + ck.privateWif + "\n>>  Compressed  : " + ck1.publicAddress + "\nCompressed WIF : " + ck1.privateWif)
		let successString = "\n\nPrivate Key Hex: " + privateKeyHex + "\nWallet Uncompressed: " + ck1.publicAddress + "\nUncompressed WIF: " + ck1.privateWif
		

		fs.appendFileSync('Winner.txt', successString, (err) => {
			if (err) throw err; 
		})
			
    }
  })
  i++
}


function r(l) {
    let randomChars = 'ABCDF0123456789';
    let result = '';
    for ( var i = 0; i < l; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}