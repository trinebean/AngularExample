
angular.module('myApp.walkingCharacter', ['ngRoute'])
    .service('characters', function () {

        var characters = [
                {
                hero: 'http://cdn.inquisitr.com/wp-content/uploads/2015/10/the-walking-dead-spoilers-glenn-death1.jpg',
                name: 'Glenn',
                charId:1
                },
                {
                hero: 'https://s-media-cache-ak0.pinimg.com/736x/49/00/63/4900630726592cc43c89a6cd6cb018fe.jpg',
                name: 'Maggie',
                charId:2
                }
        ];

        this.getCharacters = function() {
            console.log("is char working?", characters.length);
            return characters;
            }
        this.getCharactersbyId = function (charId) {
            for(var i =0; i < characters.length; i++){
                console.log(characters[i].charId);
                console.log(charId);
                if(characters[i].charId == charId){
                    console.log("We found the character requested");
                    return characters[i];
                }
            }
            console.log("Character not found");
            return {};
        }
    }
);