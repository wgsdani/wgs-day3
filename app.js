// const validator = require('validator');

// console.log(validator.isEmail('daniwgs92@gmail.com'));
// console.log(validator.isMobilePhone('08996988449','id-ID'));

const { command } = require('yargs');
const yargs = require('yargs')
// console.log(yargs.argv);

const func = require('./function')


yargs.command({
	command:'add',
	describe:'add new contact',
	builder:{
		name:{
			describe:'Contact Name',
			demandOption:true,
			type:'string',
		},
		email:{
			describe:'Contact Email',
			demandOption:false,
			type:'string',
		},
		mobile:{
			describe:'Contact mobile phone number',
			demandOption:true,
			type:'string',
		},
	},
	handler(argv){
		func.getcontacts(argv.name, argv.email, argv.mobile);
	}
});


	yargs.command({
		command:'list',
		describe:'List contact data',
	
	handler(){
		func.listContact();
	}
});


	yargs.command({
		command:'detail',
		describe:'Detail contact data',
		builder:{
			name:{
				describe:'Contact Name',
				demandOption:true,
				type:'string',
			},
		},
	
	handler(argv){
		func.detailContact(argv.name);
	}
});

yargs.parse();

