const app = {
    banners: [
        {
            title: 'Giảm giá 50% trong BLACK FRIDAY',
            content: 'Khám phá những xu hướng mới nhất và những sản phẩm kinh điển vượt thời gian Cho dù bạn đang đang tìm kiếm bất kỳ món quà hoàn hảo, Bộ sưu tập Black Friday của chúng tôi đều đáp ứng được nhu cầu của bạn.',
            img: './img/banners/DALL·E 2024-11-06 18.34.58 - A highly artistic, futuristic Black Friday scene, where sleek technology and digital innovation are at the forefront. The background f.jpg'
        },
        {
            title: 'Có thiết kế bằng titan chắc chắn và nhẹ',
            content: 'Các cạnh viền mới, nâng cấp camera mạnh mẽ và A17 Pro cho hiệu suất ở cấp độ tiếp theo',
            img: 'https://mainguyen.sgp1.digitaloceanspaces.com/279271/Cap-Nhat-Moi-Ve-Kich-Thuoc-iPhone-16-Pro-va-iPhone-16-Pro-Max-TechTimes-%281%29.jpg'
        },
        {
            title: 'Thiết kế hiện đại và sang trọng',
            content: 'Hiệu năng mạnh mẽ, trẻ trung hợp xu hướng',
            img: 'https://idmphsmkuxkn.compat.objectstorage.us-ashburn-1.oraclecloud.com/cdn-bucket/uploads/2024/03/iPhone-16-Pro-Max-precio-lanzamiento-y-colores-disponibles.jpg'
        }
    ],

    // Hàm render để hiển thị nội dung
    render: function () {
        const video_w = document.querySelector('.video-w')
        const bannerContainer = document.querySelector('.hero');
        
        // Xóa nội dung cũ trước khi render mới
        bannerContainer.innerHTML = '';

        // Lấy banner hiện tại
        const currentBanner = this.banners[this.currentBannerIndex];
        
        // Tạo phần HTML cho banner
        const bannerHTML = `
             <div class="hero-text">
            <h1>${currentBanner.title}</h1>
            <p>${currentBanner.content}</p>
            <div class="cta-buttons">   
                <button class="shop-now">Shop Now</button>
                <button class="watch-video"><svg style="transform: translateY(3px);" xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg> Watch Video</button>
            </div>
        </div>
        <div class="hero-image">
            <img  src="${currentBanner.img}" alt="iPhone models">
        </div>
        `;
        
        // Chèn nội dung banner vào container
        bannerContainer.innerHTML = bannerHTML;
        let watch_video = document.querySelector('.watch-video')
        watch_video.addEventListener('click', function(){
           video_w.style.display = "block";
        })
        let shopnow = document.querySelector('.shop-now')
        shopnow.addEventListener('click', function(){
            window.scrollBy({
                top: 700, // Cuộn xuống 700px (đổi số này theo ý bạn)
                left: 100, // Cuộn sang phải 100px (đổi số này theo ý bạn)
                behavior: 'smooth' // Cuộn mượt
            });
        })
    },
    // hàm xử lý video ẩn hiện 
    hidevideo: function(){
        const video_w = document.querySelector('.video-w')
        const icon_delete_video = document.querySelector('.icon-delete-video')
        icon_delete_video.addEventListener('click', function(){
            video_w.style.display = "none";
        })
        video_w.addEventListener('click', function(){
            video_w.style.display = "none";
        })
    },
    scrollDown: function() {
        window.scrollBy({
          top: 100, // Cuộn xuống 100px
          behavior: 'smooth' // Cuộn mượt
        });
      },

    // Hàm để bắt đầu hiển thị banner
    start: function () {
        this.hidevideo()
        this.currentBannerIndex = 0; // Bắt đầu từ banner đầu tiên
        this.render(); // Gọi hàm render để hiển thị banner đầu tiên
        
        // Lặp lại sau mỗi 10 giây
        setInterval(() => {
            // Chuyển sang banner tiếp theo
            this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
            this.render();
        }, 10000);

    }
};

app.start();
