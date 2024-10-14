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

// Dapatkan semua data
const getAllData = () => {
    console.log("Tampilkan semua: ", data);
}

// Dapatkan data dengan nama tertentu
const getDataByNama = (name) => {
    const result = data.filter(person => person.name === name);
    console.log(`Data dengan nama: "${name}":`, result);
}

// Dapatkan data dengan alamat tertentu
const getDataByCity = (city) => {
    const result = data.filter(person => person.city === city);
    console.log(`Data dengan kota: "${city}":`, result);
}

// Dapatkan data dengan umur tertentu
const getDataByAge = (age) => {
    const result = data.filter(person => person.age >= age);
    console.log(`Data dengan umur >= "${age}":`, result);
}

// Perintah untuk menampilkan di terminal
switch (process.argv[2]) {
    case 'all':
        getAllData();
        break;
    case 'name':
        getDataByNama(process.argv[3]);
        break;
    case 'city':
        getDataByCity(process.argv[3]);
        break;
    case 'age':
        getDataByAge(parseInt(process.argv[3], 10));
        break;
    default:
        console.log("Tolong masukkan pilihan yang benar");
}

// TODO 1: dapatkan semua data
// TODO 2: dapatkan data dengan nama tertentu
// TODO 3: dapatkan data dengan alamat New York
// TODO 4: dapatkan data dengan umur >= 30
