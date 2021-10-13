import {News} from './noticias.js';
declare let  Handlebars;
let botsearch= document.querySelector('#button-search');


const news= new News;


botsearch.addEventListener('click',async function (e) {
    e.preventDefault();
    let qs= (<HTMLInputElement>document.getElementById('searchbar')).value;
    //console.log(qs);
    news.getAll(qs).then(response=>{
        //console.log(response.data.articles);
        const templateSource = document.getElementById('news-template').innerHTML;
        const template = Handlebars.compile(templateSource);
        const resultHtml=template({
            news: response.data.articles
        }); 
        //console.log(resultHtml)
        document.getElementById('news').innerHTML = resultHtml; 
    })
})
