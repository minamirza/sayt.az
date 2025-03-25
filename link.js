const sliderContent = document.getElementById('sliderContent');
        let index = 0;

        function updateSlider() {
            sliderContent.style.transform = `translateX(-${index * 50}%)`;
        }

        function next() {
            if (index < 1) { // Video sayı - 1
                index++;
                updateSlider();
            }
        }

        function prev() {
            if (index > 0) {
                index--;
                updateSlider();
            }
        }