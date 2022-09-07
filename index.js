const func = require('./function')

	// pertanyaan yang ditanyakan

	const main = async() => {
		const name = await func.pertanyaan('Masukan nama kamu : ');
		const number = await func.pertanyaan('Masukan mobile number kamu :');
		const email = await func.pertanyaan('Masukan email kamu:');
		func.getcontacts(name,number,email)

	}
	main()

