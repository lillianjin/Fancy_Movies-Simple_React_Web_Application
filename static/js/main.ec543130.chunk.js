(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){e.exports=a(288)},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},18:function(e,t){e.exports={apiURL:"https://api.themoviedb.org/3",apiKey:"?api_key=f0d7d771d523ead5071f9e17e2674030"}},286:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(38),o=a.n(s),c=(a(143),a(24)),l=a(25),r=a(27),m=a(26),g=a(28),v=a(293),u=a(294),d=(a(144),a(7)),h=a(292),p=a(291),E=(a(145),a(85),a(32)),b=a.n(E),N=a(18),f=a(14),w=a(15),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={curr_index:0,tot_index:0,movieList:[],title:"",poster:"",overview:"",date:"",rating:0},a.getMovie=a.getMovie.bind(Object(d.a)(Object(d.a)(a))),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"getMovie",value:function(){var e=parseInt(this.props.match.params.index),t=this.props.location.state.movieList,a=t[e];console.log(a),this.setState({curr_index:e,tot_index:t.length,movieList:t,title:a.title,poster:a.poster_path,overview:a.overview,date:a.release_date,rating:a.vote_average})}},{key:"preview",value:function(){var e=this.state.curr_index,t=this.state.tot_index;return e>0?e-1:t-1}},{key:"nextview",value:function(){var e=this.state.curr_index;return e<this.state.tot_index-1?e+1:0}},{key:"render",value:function(){return i.a.createElement("div",{className:"Details"},i.a.createElement("div",{className:"header"},i.a.createElement(p.a,{to:"/"},i.a.createElement("img",{className:"logo",src:"https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png",alt:"logo"})),i.a.createElement("h1",{className:"title"},"Fancy Movies"),i.a.createElement("div",{className:"toggle-container"},i.a.createElement(p.a,{to:"/"},i.a.createElement(h.a,{title:"Gallery View",className:"#/"===window.location.hash?"toggle-active toggle-button":"toggle-button"},i.a.createElement(w.a,{className:"toggle-icon",icon:f.c,size:"2x"}))),i.a.createElement(p.a,{to:"/list"},i.a.createElement(h.a,{title:"List View",className:"#/list"===window.location.hash?"toggle-active toggle-button":"toggle-button"},i.a.createElement(w.a,{className:"toggle-icon",icon:f.d,size:"2x"}))))),i.a.createElement("div",{className:"detail-container"},i.a.createElement(p.a,{to:{pathname:"/details0/".concat(this.preview()),state:{movieList:this.state.movieList}}},i.a.createElement("div",{className:"arrow-left"},i.a.createElement(w.a,{icon:f.a,size:"2x"}))),i.a.createElement("img",{className:"detail-poster",src:"https://image.tmdb.org/t/p/original"+this.state.poster,alt:"movie poster"}),i.a.createElement("div",{className:"detail-tag"},i.a.createElement("h2",{className:"detail-name"},this.state.title),i.a.createElement("p",{className:"detail-ab"},"Release Date:\xa0"),i.a.createElement("p",{className:"detail-date"},this.state.date),i.a.createElement("p",{className:"detail-ab"},"Rating:\xa0"),i.a.createElement("p",{className:"detail-rating"},this.state.rating,"/10"),i.a.createElement("p",{className:"detail-ab"},"Overview:\xa0"),i.a.createElement("p",{className:"detail-overview"},this.state.overview)),i.a.createElement(p.a,{to:{pathname:"/details0/".concat(this.nextview()),state:{movieList:this.state.movieList}}},i.a.createElement("div",{className:"arrow-right"},i.a.createElement(w.a,{icon:f.b,size:"2x"})))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={movieList:[],genreList:[],currGenre:0},a.getMovie=a.getMovie.bind(Object(d.a)(Object(d.a)(a))),a.getGenre=a.getGenre.bind(Object(d.a)(Object(d.a)(a))),a.getMovieByGenre=a.getMovieByGenre.bind(Object(d.a)(Object(d.a)(a))),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getGenre(),this.getMovie()}},{key:"getMovie",value:function(){var e=this;b.a.get("".concat(N.apiURL,"/movie/popular").concat(N.apiKey,"&language='en-us'")).then(function(t){e.setState({movieList:t.data.results,currGenre:0})}).catch(function(e){console.log(e)})}},{key:"getGenre",value:function(){var e=this;b.a.get("".concat(N.apiURL,"/genre/movie/list").concat(N.apiKey,"&language='en-us'")).then(function(t){e.setState({genreList:t.data.genres})}).catch(function(e){console.log(e)})}},{key:"getMovieByGenre",value:function(e){var t=this;b.a.get("".concat(N.apiURL,"/discover/movie").concat(N.apiKey,"&language='en-us'&with_genres=").concat(e.id)).then(function(a){t.setState({movieList:a.data.results,currGenre:e.id})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.genreList.map(function(t,a){return i.a.createElement("div",{className:e.state.currGenre===t.id?"active genre":"genre",onClick:function(){return e.getMovieByGenre(t)},key:t.id},i.a.createElement("p",{className:"genre-name"}," ",t.name))}),a=this.state.movieList;console.log(a);var n=a.map(function(e,t){return i.a.createElement("div",{className:"item-wrapper",key:t},i.a.createElement(p.a,{to:{pathname:"/details/".concat(t),state:{movieList:a}},className:"gallery-item",key:e.id},i.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:"movie poster"}),i.a.createElement("div",{className:"tag"},i.a.createElement("h3",{className:"movie-name"},e.original_title),i.a.createElement("p",{className:"movie-rating"},i.a.createElement(w.a,{icon:f.f,size:"sm"}),"\xa0",e.vote_average,"/10"))))});return i.a.createElement("div",{className:"Home"},i.a.createElement("div",{className:"header"},i.a.createElement(p.a,{to:"/"},i.a.createElement("img",{className:"logo",src:"https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png",alt:"logo"})),i.a.createElement("h1",{className:"title"},"Fancy Movies"),i.a.createElement("div",{className:"toggle-container"},i.a.createElement(p.a,{to:"/"},i.a.createElement(h.a,{title:"Gallery View",className:"#/"===window.location.hash?"toggle-active toggle-button":"toggle-button"},i.a.createElement(w.a,{className:"toggle-icon",icon:f.c,size:"2x"}))),i.a.createElement(p.a,{to:"/list"},i.a.createElement(h.a,{title:"List View",className:"#/list"===window.location.hash?"toggle-active toggle-button":"toggle-button"},i.a.createElement(w.a,{className:"toggle-icon",icon:f.d,size:"2x"}))))),i.a.createElement("div",{className:"filter-list"},i.a.createElement("div",{className:"genre-list"},i.a.createElement("h3",null," Genre "),i.a.createElement("div",{className:0===this.state.currGenre?"active genre":"genre",onClick:function(){return e.getMovie()},key:0},i.a.createElement("p",{className:"genre-name"}," All Genres")),t)),i.a.createElement("div",{className:"gallery"},n))}}]),t}(n.Component),O=(a(286),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={cur_res:0,cur_page:0,total_res:0,total_page:0,movieList:[],keyword:"",sort_by:"title",order:"asc"},a.inputChangeHandler=a.inputChangeHandler.bind(Object(d.a)(Object(d.a)(a))),a.clickHandler=a.clickHandler.bind(Object(d.a)(Object(d.a)(a))),a.sortChange=a.sortChange.bind(Object(d.a)(Object(d.a)(a))),a.orderChange=a.orderChange.bind(Object(d.a)(Object(d.a)(a))),a.sortByTitle=a.sortByTitle.bind(Object(d.a)(Object(d.a)(a))),a.sortByNum=a.sortByNum.bind(Object(d.a)(Object(d.a)(a))),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getPopularMovie()}},{key:"getPopularMovie",value:function(){var e=this;b.a.get("".concat(N.apiURL,"/movie/popular").concat(N.apiKey,"&language='en-us'")).then(function(t){e.setState({total_res:t.data.total_results,movieList:t.data.results,cur_res:t.data.results.length})}).catch(function(e){console.log(e)})}},{key:"inputChangeHandler",value:function(e){this.setState({keyword:e.target.value})}},{key:"sortByNum",value:function(e,t,a,n){var i="vote_average"===n?e.vote_average-t.vote_average:e.popularity-t.popularity;return"asc"===a?i:-1*i}},{key:"sortByTitle",value:function(e,t,a){var n=e.title.toLowerCase().localeCompare(t.title.toLowerCase());return"asc"===a?n:-1*n}},{key:"clickHandler",value:function(){var e=this;b.a.get("".concat(N.apiURL,"/search/movie").concat(N.apiKey,"&query=").concat(this.state.keyword,"&language='en-us'")).then(function(t){if(console.log(t.data.results),e.setState({movieList:t.data.results,total_res:t.data.total_results,cur_res:t.data.results.length,total_page:t.data.total_pages,cur_page:t.data.page}),"title"===e.state.sort_by){var a=e.state.movieList.sort(function(t,a){return e.sortByTitle(t,a,e.state.order)});e.setState({movieList:a})}else{var n=e.state.movieList.sort(function(t,a){return e.sortByNum(t,a,e.state.order,e.state.sort_by)});e.setState({movieList:n})}console.log(e.state.movieList)}).catch(function(e){console.log(e)})}},{key:"orderChange",value:function(e){this.setState({order:e.target.value})}},{key:"sortChange",value:function(e){this.setState({sort_by:e.target.value})}},{key:"render",value:function(){var e=this,t=(this.state.total_res,this.state.movieList.map(function(t,a){return i.a.createElement(p.a,{to:{pathname:"/details/".concat(a),state:{movieList:e.state.movieList}},className:"list-item",key:t.id},i.a.createElement("img",{className:"list-poster",src:"https://image.tmdb.org/t/p/original"+t.poster_path,alt:"movie poster"}),i.a.createElement("div",{className:"list-tag"},i.a.createElement("h3",{className:"list-movie-name"},t.title),i.a.createElement("p",{className:"list-movie-date"},t.release_date),i.a.createElement("p",{className:"list-movie-rating"},i.a.createElement(w.a,{icon:f.f,size:"sm"}),"\xa0",t.vote_average,"/10"),i.a.createElement("p",{className:"list-movie-overview"},t.overview)))}));return i.a.createElement("div",{className:"List"},i.a.createElement("div",{className:"header"},i.a.createElement(p.a,{to:"/list"},i.a.createElement("img",{className:"logo",src:"https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png",alt:"logo"})),i.a.createElement("h1",{className:"title"},"Fancy Movies"),i.a.createElement("div",{className:"toggle-container"},i.a.createElement(p.a,{to:"/"},i.a.createElement(h.a,{title:"Gallery View",className:"#/"===window.location.hash?"toggle-active toggle-button":"toggle-button"},i.a.createElement(w.a,{className:"toggle-icon",icon:f.c,size:"2x"}))),i.a.createElement(p.a,{to:"/list"},i.a.createElement(h.a,{title:"List View",className:"#/list"===window.location.hash?"toggle-active toggle-button":"toggle-button"},i.a.createElement(w.a,{className:"toggle-icon",icon:f.d,size:"2x"}))))),i.a.createElement("div",{className:"search-container"},i.a.createElement("div",{className:"search-bar"},i.a.createElement(w.a,{className:"search-icon",icon:f.e,size:"2x"}),i.a.createElement("input",{type:"text",onChange:this.inputChangeHandler,placeholder:"Search Movies",className:"search-input"})),i.a.createElement("input",{className:"search-submit",onClick:this.clickHandler,type:"button",value:"Submit"})),i.a.createElement("div",{className:"sort-container-1"},i.a.createElement("p",{className:"sort-word"},"Sort\xa0by:\xa0"),i.a.createElement("form",{className:"sort-form"},i.a.createElement("select",{onChange:this.sortChange},i.a.createElement("option",{value:"title"},"Title"),i.a.createElement("option",{value:"vote_average"},"Rating"),i.a.createElement("option",{value:"popularity"},"Popularity")))),i.a.createElement("div",{className:"total_res"},this.state.cur_res,"\xa0of\xa0",this.state.total_res,"\xa0results"),i.a.createElement("div",{className:"sort-container-2"},i.a.createElement("p",{className:"sort-word"},"Order:\xa0"),i.a.createElement("form",{className:"sort-form"},i.a.createElement("select",{onChange:this.orderChange},i.a.createElement("option",{value:"asc"},"Asending"),i.a.createElement("option",{value:"desc"},"Desending")))),i.a.createElement("div",{className:"list"},t))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={curr_index:0,tot_index:0,movieList:[],title:"",poster:"",overview:"",date:"",rating:0},a.getMovie=a.getMovie.bind(Object(d.a)(Object(d.a)(a))),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"getMovie",value:function(){var e=parseInt(this.props.match.params.index),t=this.props.location.state.movieList,a=t[e];console.log(t),this.setState({curr_index:e,tot_index:t.length,movieList:t,title:a.title,poster:a.poster_path,overview:a.overview,date:a.release_date,rating:a.vote_average})}},{key:"preview",value:function(){var e=this.state.curr_index,t=this.state.tot_index;return e>0?e-1:t-1}},{key:"nextview",value:function(){var e=this.state.curr_index;return e<this.state.tot_index-1?e+1:0}},{key:"render",value:function(){return i.a.createElement("div",{className:"Details"},i.a.createElement("div",{className:"header"},i.a.createElement(p.a,{to:"/"},i.a.createElement("img",{className:"logo",src:"https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png",alt:"logo"})),i.a.createElement("h1",{className:"title"},"Fancy Movies"),i.a.createElement("div",{className:"toggle-container"},i.a.createElement(p.a,{to:"/"},i.a.createElement(h.a,{title:"Gallery View",className:"#/"===window.location.hash?"toggle-active toggle-button":"toggle-button"},i.a.createElement(w.a,{className:"toggle-icon",icon:f.c,size:"2x"}))),i.a.createElement(p.a,{to:"/list"},i.a.createElement(h.a,{title:"List View",className:"#/list"===window.location.hash?"toggle-active toggle-button":"toggle-button"},i.a.createElement(w.a,{className:"toggle-icon",icon:f.d,size:"2x"}))))),i.a.createElement("div",{className:"detail-container"},i.a.createElement(p.a,{to:{pathname:"/details/".concat(this.preview()),state:{movieList:this.state.movieList}}},i.a.createElement("div",{className:"arrow-left"},i.a.createElement(w.a,{icon:f.a,size:"2x"}))),i.a.createElement("img",{className:"detail-poster",src:"http://image.tmdb.org/t/p/original"+this.state.poster,alt:"movie poster"}),i.a.createElement("div",{className:"detail-tag"},i.a.createElement("h2",{className:"detail-name"},this.state.title),i.a.createElement("p",{className:"detail-ab"},"Release Date:\xa0"),i.a.createElement("p",{className:"detail-date"},this.state.date),i.a.createElement("p",{className:"detail-ab"},"Rating:\xa0"),i.a.createElement("p",{className:"detail-rating"},this.state.rating,"/10"),i.a.createElement("p",{className:"detail-ab"},"Overview:\xa0"),i.a.createElement("p",{className:"detail-overview"},this.state.overview)),i.a.createElement(p.a,{to:{pathname:"/details/".concat(this.nextview()),state:{movieList:this.state.movieList}}},i.a.createElement("div",{className:"arrow-right"},i.a.createElement(w.a,{icon:f.b,size:"2x"})))))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"root"},i.a.createElement(v.a,null,i.a.createElement("div",null,i.a.createElement(u.a,{exact:!0,path:"/",component:_}),i.a.createElement(u.a,{path:"/list",component:O}),i.a.createElement(u.a,{path:"/details/:index",component:y}),i.a.createElement(u.a,{path:"/details0/:index",component:j}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,t,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.ec543130.chunk.js.map