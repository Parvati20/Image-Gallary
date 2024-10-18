const images = {
    nature: [
        { src: 'forest.jpg', title: 'Forest', info: 'A lush green forest full of life.' },
        { src: 'River.jpg', title: 'River', info: 'A beautiful river flowing through nature.' },
        { src: 'mountain.jpg', title: 'Mountain', info: 'Snow-capped majestic mountains.' },
        { src: 'Birds.jpg', title: 'Birds', info: 'Colorful birds flying freely.' },
        { src: 'animals.jpg', title: 'Animals', info: 'Wildlife in their natural habitat.' },
        { src: 'ocean.jpg', title: 'Ocean', info: 'Vast, calming ocean waves.' },
        { src: 'sunlight.jpeg', title: 'Sunlight', info: 'Sunlight breaking through the trees.' }
    ],
    seasons: [
        { src: 'spring.jpeg', title: 'Spring', info: 'Flowers blooming and birds chirping.' },
        { src: 'summer.jpg', title: 'Summer', info: 'Warm sun and clear skies.' },
        { src: 'monsoon.jpg', title: 'Monsoon', info: 'Rain refreshing the earth.' },
        { src: 'autumn.jpg', title: 'Autumn', info: 'Golden leaves covering the ground.' },
        { src: 'winter.jpg', title: 'Winter', info: 'Snowflakes and frosty mornings.' }
    ],
    food: [
        { src: 'purnpoli.jpg', title: 'Puran Poli', info: 'A sweet Indian flatbread.' },
        { src: 'idli.jpg', title: 'Idli', info: 'Steamed rice cakes, soft and fluffy.' },
        { src: 'aloo paratha.jpg', title: 'Aalu Paratha', info: 'Stuffed flatbread with spiced potatoes.' },
        { src: 'cholebhature.jpg', title: 'Chole Bhature', info: 'Spicy chickpeas with fried bread.' },
        { src: 'biryani.jpg', title: 'Veg Biryani', info: 'Aromatic rice with mixed vegetables.' }
    ],
    cities: [
        { src: 'dubai.jpg', title: 'Dubai', info: 'A modern city with towering skyscrapers.' },
        { src: 'nyc.webp', title: 'New York City', info: 'The city that never sleeps.' },
        { src: 'tokyo.jpg', title: 'Tokyo', info: 'The bustling capital of Japan.' },
        { src: 'Londons.jpg', title: 'London', info: 'Historic landmarks and modern vibes.' },
        { src: 'paris.jpeg', title: 'Paris', info: 'The city of love and lights.' },
        { src: 'mumbai.jpg', title: 'Mumbai', info: 'The heart of India’s film industry.' }
    ]
};

function filterImages(category) {
    let gallery = document.getElementById('image-gallery');
    gallery.innerHTML = ''; 
    let selectedImages = category === 'all' ? Object.values(images).flat() : images[category];

    selectedImages.forEach(image => {
        gallery.innerHTML += `
            <div class="gallery-item" onclick="highlightImage(this)">
                <img src="${image.src}" alt="${image.title}">
                <div class="gallery-item-title">${image.title}</div>
                <div class="gallery-item-info">${image.info}</div>
            </div>
        `;
    });
}

function highlightImage(element) {
    const imgSrc = element.querySelector('img').src;
    const imgTitle = element.querySelector('.gallery-item-title').innerText;

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgTitle;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

filterImages('all');
