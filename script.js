//your JS code here. If required.
const data = [
	{
		image: 'https://www.bookgeeks.in/wp-content/uploads/2018/01/Spy-in-the-Amber-by-Manohar-Malgonkar.jpg',
		name: 'SPY IN THE AMBER',
		author: 'BY Manohar Malgonkar',
		price: 299
	},
	{
		image: 'https://www.bookgeeks.in/wp-content/uploads/2018/01/Sacred-Games-by-Vikram-Chandra.jpg',
		name: 'Sacred Games',
		author: 'by Vikram Chandra',
		price: 199
	},
	{
		image: 'https://www.bookgeeks.in/wp-content/uploads/2018/01/Byomkesh-Bakshi-by-Sharadindu-Bandyopadhyay.jpg',
		name: 'BYOMKESH BAKSHI',
		author: 'By Sharadindu Bandyopadhyay',
		price: 299
	}
];

const container = document.querySelector('.book-library');

function appendData(data) {
	data.forEach(({image, name, author, price}) => {
		const div = document.createElement('div');
		div.className = 'book';

		const imageDiv = document.createElement('div');
		imageDiv.className = 'imageDiv';
		const imageTag = document.createElement('img');
		imageTag.src = image;
		imageDiv.append(imageTag);

		const bookName = document.createElement('h1');
		bookName.innerText = name;

		const authorName = document.createElement('p');
		authorName.innerText = author;

		const bookPrice = document.createElement('button');
		bookPrice.innerText = `Rs. ${price}`;

		div.append(imageDiv, bookName, authorName, bookPrice);
		container.append(div);
	});
}


appendData(data);


