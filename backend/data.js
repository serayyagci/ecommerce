import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name:'Seray',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Client',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
        name: 'Cujo',
        category: 'Books',
        image: 'https://www.kindpng.com/picc/m/714-7149338_transparent-ebook-cover-png-poster-png-download.png',
        images:['https://www.kindpng.com/picc/m/714-7149338_transparent-ebook-cover-png-poster-png-download.png'],
        price: 10,
        countInStock:15,
        type: 'Fantasy',
        rating: 5,
        numReviews: 10,
        description: 'An amazing book!'
        },
{
        name: 'The Stand',
        category: 'Books',
        image: 'https://www.kindpng.com/picc/m/714-7149338_transparent-ebook-cover-png-poster-png-download.png',
        price: 10,
        countInStock:15,
        type: 'Fantasy',
        rating: 5,
        numReviews: 10,
        description: 'An amazing book!'
        },{
        name: 'The Shining',
        category: 'Books',
        image: 'https://www.kindpng.com/picc/m/714-7149338_transparent-ebook-cover-png-poster-png-download.png',
        price: 10,
        countInStock:15,
        type: 'Fantasy',
        rating: 5,
        numReviews: 10,
        description: 'An amazing book!'
        },
        {
        name: 'It',
        category: 'Books',
        image: 'https://www.kindpng.com/picc/m/714-7149338_transparent-ebook-cover-png-poster-png-download.png',
        price: 10,
        countInStock:15,
        type: 'Fantasy',
        rating: 5,
        numReviews: 10,
        description: 'An amazing book!'
        },
        {
        name: 'The Dark Tower',
        category: 'Books',
        image: 'https://www.kindpng.com/picc/m/714-7149338_transparent-ebook-cover-png-poster-png-download.png',
        price: 10,
        countInStock:15,
        type: 'Fantasy',
        rating: 5,
        numReviews: 10,
        description: 'An amazing book!'
        },
        {
        name: 'Misery',
        category: 'Books',
        image: 'https://www.kindpng.com/picc/m/714-7149338_transparent-ebook-cover-png-poster-png-download.png',
        price: 10,
        countInStock:15,
        type: 'Fantasy',
        rating: 5,
        numReviews: 10,
        description: 'An amazing book!'
        }
    ]
}

export default data;