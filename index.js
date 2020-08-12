var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        if (rating === void 0) { rating = 'PG-13'; }
        this.filteredArray = [];
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.prototype.getPG = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].rating == 'PG-13') {
                this.filteredArray.push(arr[i]);
            }
        }
        return this.filteredArray;
    };
    return Movie;
}());
var movieCreation = function () {
    var movieNew = new Movie('Casino Royale', 'Eon Productions');
    var m1 = document.querySelector('.change');
    m1.innerHTML =
        "<div class=\"col-md-4\">\n        <h4> Movie Name = " + movieNew.title + "</h4>\n    </div>\n    <div class=\"col-md-4\">\n        <h4> Studio Name = " + movieNew.studio + "</h4>\n    </div>\n    <div class=\"col-md-4\">\n        <h4> Rating = " + movieNew.rating + "</h4>\n    </div>";
};
