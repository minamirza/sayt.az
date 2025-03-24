let currentIndex = 0;
        const sliderContent = document.getElementById("sliderContent");
        const totalSlides = sliderContent.children.length;
        
        function updateSlider() {
            sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        function prevSlide() {
            currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
            updateSlider();
        }
        
        function nextSlide() {
            currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
            updateSlider();
        }
        
        function setSlide(index) {
            currentIndex = index;
            updateSlider();
        }