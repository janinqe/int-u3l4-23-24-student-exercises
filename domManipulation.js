// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
myName.innerHTML="My name is Janine";
myHobby.innerHTML="I like to draw"
myLocation.innerHTML="I live in Jackson Heights"



});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener("click", function(){
  image.src="https://i.pinimg.com/originals/56/ea/54/56ea547e101bf9fe4418d066d73511c7.jpg"
})




// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener("click", function(){
image.src="https://static.vecteezy.com/system/resources/previews/022/400/509/non_2x/funny-cow-with-sunglasses-sky-blue-background-generative-ai-digital-art-illustration-photo.jpeg"
})
// BONUS
// 7. Try using different event types for your buttons.
image2Button.addEventListener("mouseover", function(){
image2Button.style.color="pink"
                      
})