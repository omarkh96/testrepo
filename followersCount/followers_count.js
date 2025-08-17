let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
  displayCount();
  checkCountValue(); // Check count value and display messages
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue(){
    if (count === 10 ){
        alert ("your insta poat gained 10 followers")
    } else if (count ===20){
        alert("your instagram gained 20 followers")
    }

}