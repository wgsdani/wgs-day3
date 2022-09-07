
// const readline = require("readline");
const fs = require('fs');
const { resolve } = require("path");
const { rejects } = require("assert");
const validator = require('validator');


// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout

// });

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

// // pertanyaan
// 	const pertanyaan = (ask) => {
// 		return new Promise((resolve,rejects)=>{
// 			rl.question(ask, (jawaban)=>{
// 				resolve (jawaban)
// 			})
// 		})
// 	}

// Load Contact
const loadContact=()=> {
	const file = fs.readFileSync(filepath,'utf-8');
		const contacts = JSON.parse(file);

		return contacts;
}

// List Contact
const listContact=()=>{
	const contacts = loadContact();
	console.log('Contact List : ');
	contacts.forEach((contact,i) => {
		console.log(`${i+1}.${contact.name}-${contact.mobile}`);
	});
};

// Detail Contact
const detailContact=(name) => {
	const contacts = loadContact();
	const detailContact = contacts.find((contact) => contact.name === name);
	if(detailContact){
		console.log('This is detail contact');
		console.log('Contact Detail : ');
		console.log(detailContact.name);
		console.log(detailContact.email);
		console.log(detailContact.mobile);
	}else {
		console.log('Detailed data is invalid');
		return false;
	};



}
// menyimpan data contacts
	const getcontacts = (name,email,mobile) => {
		const contact = {name,email,mobile};
		const contacts = loadContact() 

		const duplicateName=contacts.find((contact)=> contact.name === name);
		if(duplicateName){
			console.log('Contact name is already recorded. Use another contact name');
			return false;
		}
		if(email){

		if(!validator.isEmail(email)){
			console.log('Email format is invalid !');

			return false;
		}
	}
		if(!validator.isMobilePhone(mobile, 'id-ID')){
			console.log('Mobile Phone is invalid !');
		}
		
		contacts.push(contact);
		fs.writeFileSync(filepath, JSON.stringify(contacts));
	
			console.log(`Thank youu ${name}, for ur entering the data !!`);

// rl.close();
}

module.exports = {getcontacts, listContact, detailContact}
