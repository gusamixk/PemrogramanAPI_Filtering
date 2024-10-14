
let data = [
	{
		id: 1,
		name: 'John Doe',
		hobbies: [
			{
				id: 1,
				name: 'playing games',
			},
		],
		age: 30,
		address: '123 Main St',
		city: 'New York',
		phone: '555-1234',
	},
	{
		id: 2,
		name: 'Jane Smith',
		age: 25,
		address: '456 Oak Ave',
		city: 'Los Angeles',
		phone: '555-5678',
	},
	{
		id: 3,
		name: 'Michael Johnson',
		age: 40,
		address: '789 Pine Rd',
		city: 'Chicago',
		phone: '555-8765',
	},
	{
		id: 4,
		name: 'Emily Davis',
		age: 35,
		address: '321 Cedar St',
		city: 'New York',
		phone: '555-4321',
	},
];
// dapatkan semua data
const getallData =()=>{
	console.log("tampilkan semua : ", data);
}
// dapatkan data dengan nama tertentu
const getDatabyNama = (name: string)=>{
	const result = data.filter(person => person.name === name)
	console.log(`Data dengan nama : "${name}":`, result);
}
// dapatkan data dengan alamat tertentu
const getDatabyCity = (city: string)=>{
	const result = data.filter(person => person.city === city)
	console.log(`Data dengan kota : "${city}":`, result);
}
// dapatkan data dengan umur tertentu
const getDatabyAge = (age: number)=>{
	const result = data.filter(person => person.age >= age)
	console.log(`Data dengan umur : "${age}":`, result);
}

// perintah untuk menampikan di terminal
switch (process.argv[2]){
	case 'all':
		getallData();
		break;
	case 'name':
		getDatabyNama(process.argv[3]);
		break;
	case 'city':
		getDatabyCity(process.argv[3]);
		break;
	case 'age':
		getDatabyAge(parseInt(process.argv[3], 10));
		break;
		default:
			console.log("tolong masukkan pilihan yang benar")
}

//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data dengan nama tertentu
//TODO 3 : dapatkan data dengan alamat New York
//TODO 4 : dapatkan data dengan umur >= 30

