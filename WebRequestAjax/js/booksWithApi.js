    var baseUrl = 'https://run.mocky.io/v3/';
        var options = {
        accepts: "application/json",
            cache: false,
            //error: function (error) {
        //    console.log(error)
        //},
        type: "GET",
            success: function (data) {
        console.log(data.image);
                $("img").attr("src", data.image);
                $("#title").text(data.title);
                $("#subTitle").text(data.subtitle);
                $("#author").text(data.authors);
                $("#publisher").text(data.publisher);
                $("#language").text(data.language);
                $("#isbn10").text(data.isbn10);
                $("#isbn13").text(data.isbn13);
                $("#pages").text(data.pages);
                $("#year").text(data.year);
                $("#rating").text(data.rating);
                $("#desc").text(data.desc);
                $("#price").text(data.price);
                $("#pdf").attr("href", data.pdf);
            }
        }

        $(document).ready(function () {
        $.ajax(baseUrl + '98727879-e116-4bdc-8d00-6adc38d55257', options);
        });
