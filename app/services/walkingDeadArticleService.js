
angular.module('myApp.walkingArticle', ['ngRoute'])
    .service('articles', function () {

        var articles = [{
            hero: 'http://i0.wp.com/twdfansite.com/wp-content/uploads/2016/10/IMG_0290.jpg',
            synopsis: 'We were left with this horrific image burned into our hearts at the end of season six. We knew someone was going to die, one of our brave, beloved survivors. But which one? With only minutes left before their fate is known, let’s look at our choices.',
            title: 'The Killing Field',
            gallery: [
                'https://pmcdeadline2.files.wordpress.com/2016/04/walking-dead-s6-finale-andrew-lincoln.jpg?w=446&h=299&crop=1',
                'https://pmctvline2.files.wordpress.com/2016/06/5-twd-season-5-noah.jpg?w=619',
                'http://img.cinemablend.com/filter:scale/quill/0/e/b/e/0/a/0ebe0a33a2f50f470843ceacecceb3919f13afa2.jpg?mw=600'
            ],
            id: 1,
            video: 'bunny.mp4'
        },
            {
                hero: 'http://i1.wp.com/twdfansite.com/wp-content/uploads/2016/07/promo-rick.png',
                synopsis: 'We can eliminate Rick because Negan was speaking to him and his main goal is to break him down completely. Mission accomplished!',
                title: 'Who dies?',
                gallery: [
                    'http://media.vanityfair.com/photos/5652157b0e42b20e5429ff44/master/h_590,c_limit/glenn-walking-dead-surviving-09.jpg',
                    'http://cdn.hitfix.com/photos/6204937/the-walking-dead-episode-508-walkers-935.png',
                    'http://images.amcnetworks.com/amc.com/wp-content/uploads/2015/10/the-walking-dead-episode-603-michonne-gurira-post-800x600.jpg'
                ],
                id: 2,
                video: 'bunny.mp4'
            }]

        this.getArticles = function () {
            console.log("wtaf");
            return articles;
        }
        this.getArticlesbyId = function (id) {
            for(var i =0; i < articles.length; i++){
                console.log(articles[i].id);
                console.log(id);
                if(articles[i].id == id){
                    console.log("We found an article that matches id requested");
                    return articles[i];
                }
            }
            console.log("Article not found");
            return {};
        }
    }
);