
const cardInfo = document.getElementById("cardInfo");

cl(cardInfo);

const setRating = (rating) => {
    if (rating >= 7) {
        return "badge-success";
    } else if (rating >= 5) {
        return "badge-warning";
    } else {
        return "badge-danger";
    }
};

let result = " ";
movieArr.forEach((params)=>{
    result += ` <div class="col-4 mt-5">
                <div class="card py-0 m-0">
                    <figure class="movie-card mb-0">
                        <img src="https://image.tmdb.org/t/p/w500/${params.poster_path || params.backdrop_path}" alt="${params.title || params.original_title}" 
                        title= "${params.title || params.original_title}" class="img-fluid">
                    
                        <figcaption class="m-0">
                        <div class="titleInfo">
                            <div class="row">
                                <div class="col-10">
                                    <h2>${params.title || params.original_title}</h2>

                                </div>
                                <div class="col-2">
                                    <h6>
                                        <span class ="badge ${setRating(params.vote_average)}">${params.vote_average}</span>
                                    </h6>
                                </div>
                            </div>
                        </div>

                    
                        <div class="overview">
                            <h5>${params.title || params.original_title}</h5>
                            <p> ${params.overview}</p>
                        </div>
                    
                    </figcaption>
                    </figure>
                </div>
            </div>`
});

cardInfo.innerHTML=result;