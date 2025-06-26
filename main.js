// Language change button
function changeLanguageToHindi() {
    alert("Hindi language selected");
}

// Clone scroll content for continuous scroll effect
window.addEventListener('DOMContentLoaded', function() {
    let scrollContent = document.getElementById("scrollContent");
    if (scrollContent) {
        let clone = scrollContent.cloneNode(true);
        scrollContent.appendChild(clone);
    }

    // Image slider
    let slideIndex = 1;
    showDivs(slideIndex);

    window.plusDivs = function(n) {
        showDivs(slideIndex += n);
    };

    function showDivs(n) {
        let slides = document.getElementsByClassName("mySlides");
        if (slides.length === 0) return;
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    // DateTime update
    function updateDateTime() {
        var now = new Date();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = days[now.getDay()];
        var date = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Pad single digit values with leading zero
        month = month < 10 ? '0' + month : month;
        date = date < 10 ? '0' + date : date;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        var datetimeString = day + ', ' + date + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
        var dtElem = document.getElementById('datetime');
        if (dtElem) dtElem.textContent = datetimeString;
    }

    // Update every second
    setInterval(updateDateTime, 1000);

    // Initial call to display datetime
    updateDateTime();
}); 