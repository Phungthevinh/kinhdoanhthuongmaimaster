const blackfridays = {
    blackfriday: [
        {
            title: 'BLACK FRIDAY',
            content: 'DISCOUNT 50%',
            content2: 'Discover the latest trends and timeless classics in clothing, accessories, and footwear. Whether you"re updating your wardrobe for the season or searching for the perfect gift, our Black Friday Collection has you covered.',
            img: 'https://i.pinimg.com/736x/d0/5a/ee/d05aee6494c914687bd9f618f261acf7.jpg'
        }
    ]

}

function renderBlackFriday() {
    const container = document.getElementById('black-friday-container');
    const data = blackfridays.blackfriday[0];

    container.innerHTML = `
        <div class="black-friday-image">
            <img src="${data.img}" alt="Black Friday Sale">
        </div>
        <div class="black-friday-content">
            <h1 class="sale-title">${data.title}</h1>
            <h2 class="discount-text">${data.content}</h2>
            <p class="sale-description">${data.content2}</p>
            <a href="#" class="shop-now-button">Shop Now</a>
        </div>
    `;
}



// Gọi hàm render khi trang được tải
document.addEventListener('DOMContentLoaded', renderBlackFriday);

