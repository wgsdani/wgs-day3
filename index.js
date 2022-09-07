const readline = require("readline");
const fs = require('fs');
const { resolve } = require("path");
const { rejects } = require("assert");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout

});

// membuat folder data apabila tidak ada
	const data = "./data";
	

	if (!fs.existsSync (data)){
		fs.mkdirSync(data);
	}

// membuat file contacts.json jika tidak ada 
	const filepath= "./data/contacts.json";

	if (!fs.existsSync(filepath)){
		fs.writeFileSync(filepath,`[]`);
	}


	const pertanyaan = (ask) => {
		return new Promise((resolve,rejects)=>{
			rl.question(ask, (jawaban)=>{
				resolve (jawaban)
			})
		})
	}



// menyimpan data ke dalam folder data
	const getcontacts = (name,number,email) => {
		const contact = {name,number,email};
		const file = fs.readFileSync(filepath,'utf-8');
		const contacts = JSON.parse(file);
		contacts.push(contact);

		fs.writeFileSync(filepath, JSON.stringify(contacts));
	
			console.log(`Thank youu ${name}, for ur entering the data !!`);

rl.close();
}


	// pertanyaan

	const main = async() => {
		const name = await pertanyaan('Masukan nama kamu : ');
		const number = await pertanyaan('Masukan mobile number kamu :');
		const email = await pertanyaan('Masukan email kamu:');
		getcontacts(name,number,email)

	}
	main()

