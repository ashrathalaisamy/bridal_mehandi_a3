function openBooking() {
    document.getElementById("bookingForm").style.display = "block";
    document.getElementById("screenover").style.display = "block";
}

function closeBooking() {
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("screenover").style.display = "none";
}

function submitBooking() {

    alert('YOU HAVE BOOKED ORDER!');
    closeBooking(); 
}

function openForm(bangleName, details) {
    document.getElementById("selectedImage").src =  bangleName + ".jpg";
    document.getElementById("bangleDetails").innerText = details;
    document.getElementById("floatingForm").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
}

function closeForm() {
    document.getElementById("floatingForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function buyNow() {
    closeForm();
    alert("YOUR BANGLES IS ON THE WAY!");
}