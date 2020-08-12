type movieRating = 'G'|'PG-13'| 'R' | 'NC-17'

interface movieConfig{
    title: string
    studio: string
    rating: movieRating
}
class Movie{
    public title: string
    public studio: string
    public rating: movieRating

    constructor(title: string , studio: string , rating:movieRating = 'PG-13'){
        this.title = title
        this.studio = studio
        this.rating = rating
    }

    filteredArray = []
    public getPG(arr){
        for(let i =0 ; i<arr.length; i++){
            if(arr[i].rating == 'PG-13'){
                this.filteredArray.push(arr[i])
            }
        }
        return this.filteredArray
    }
}

let movieCreation = () =>{
    let movieNew = new Movie('Casino Royale', 'Eon Productions')
    let m1 = document.querySelector('.change')

    m1.innerHTML = 
    `<div class="col-md-4">
        <h4> Movie Name = ${movieNew.title}</h4>
    </div>
    <div class="col-md-4">
        <h4> Studio Name = ${movieNew.studio}</h4>
    </div>
    <div class="col-md-4">
        <h4> Rating = ${movieNew.rating}</h4>
    </div>`
}   
