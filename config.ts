import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://userdatabase:3110zprl7MrXXEYd@ac-gn6kqd3-shard-00-00.lops7gl.mongodb.net:27017,ac-gn6kqd3-shard-00-01.lops7gl.mongodb.net:27017,ac-gn6kqd3-shard-00-02.lops7gl.mongodb.net:27017/userdb?ssl=true&replicaSet=atlas-n5rcx2-shard-0&authSource=admin&retryWrites=true&w=majority");
  console.log('connected!!');
}