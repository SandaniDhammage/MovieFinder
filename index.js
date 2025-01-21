function search() {
    let inputTag = document.getElementById("searchbox");
    let movieName = inputTag.value; 
    console.log(movieName);
    
    let htmlRequest = new XMLHttpRequest();
    let url = "http://www.omdbapi.com/?apikey=3651fa9f&t=" + encodeURIComponent(movieName); 
    htmlRequest.open("GET", url);
    htmlRequest.responseType = "json";
    htmlRequest.onload = () => {
        let response = htmlRequest.response;
        console.log(response); 
        
        if(response.Response == "True") {
            
            localStorage.setItem('movieDetails', JSON.stringify(response));
            
         
            window.location.href = './movieDetails.html';; 
        } else {
            console.log("No movies found");
            alert("Movie not found!");
        }
    };

    htmlRequest.send();
}

