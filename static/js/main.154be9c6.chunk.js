(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"Title":"Inception","Plot":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbID":"tt1375666"},{"Title":"Love Actually","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Poster":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbID":"tt0314331"},{"Title":"The Day After Tomorrow","Plot":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","Poster":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbID":"tt0319262"},{"Title":"Rogue One","Plot":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","Poster":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbID":"tt3748528"},{"Title":"The Holiday","Plot":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","Poster":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbID":"tt0457939"}]')},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),o=(a(15),a(6)),l=a(1),s=(a(16),a(17),a(18),function(e){var t=e.Title,a=e.Plot,n=void 0===a?"":a,r=e.Poster,c=e.imdbID;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:r,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},n,i.a.createElement("br",null),i.a.createElement("a",{href:"https://www.imdb.com/title/".concat(c)},"IMDB"))))}),m=function(e){var t=e.movies,a=void 0===t?[]:t;return i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement(s,Object.assign({key:e.imdbID},e))})))},u=a(2),d=a.n(u),h=a(5),p=(a(20),function(){var e=Object(h.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=317c681f&t=").concat(t));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=function(e){var t=e.addNewMovie,a=e.duplicate,r=e.deleteDuplicateMessage,c=Object(n.useState)(""),o=Object(l.a)(c,2),m=o[0],u=o[1],f=Object(n.useState)(""),v=Object(l.a)(f,2),b=v[0],g=v[1],w=Object(n.useState)(!1),E=Object(l.a)(w,2),N=E[0],M=E[1],j=Object(n.useState)(!1),O=Object(l.a)(j,2),y=O[0],T=O[1];Object(n.useEffect)((function(){T(a)}));var k=function(e){e&&!e.Error?M(!1):M(!0),a&&r()},D=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(m);case 2:t=e.sent,g(t),k(b);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"find-movie"},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",id:"movie-title",placeholder:N?"The input field must be filled":"Enter a title to search",className:"input is-danger",value:m,onChange:function(e){var t=e.target;u(t.value),M(!1)},onFocus:function(){r()}}))),i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-light",onClick:D},"Find a movie")),i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){b&&!b.Error&&t(b),u(""),g(""),k(b)}},"Add to the list")))),""===b||b.Error?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"help is-danger"},b.Error?"Can't find a movie with such a title":""),i.a.createElement("p",{className:"help is-danger"},N&&!b.Error?"Find the movie first":"")):i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"title"},"Preview"),i.a.createElement(s,b)),y&&i.a.createElement("p",{className:"help is-danger"},"This movie cannot be added to the list because it has already there"))},v=a(9),b=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.error(n),t}})),i=Object(l.a)(a,2),r=i[0],c=i[1];return[r,function(t){try{var a=t instanceof Function?t(r):t;c(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.error(n)}}]}("value",Object(o.a)(v)),s=Object(l.a)(c,2),u=s[0],d=s[1],h=Object(n.useCallback)((function(e,t){return e.every((function(e){return e.imdbID!==t.imdbID}))&&t.imdbID}),[]);return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(m,{movies:u})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(f,{addNewMovie:function(e){d((function(t){return h(t,e)?[].concat(Object(o.a)(t),[e]):(r(!0),t)}))},duplicate:a,deleteDuplicateMessage:function(){r(!1)}})))};c.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.154be9c6.chunk.js.map