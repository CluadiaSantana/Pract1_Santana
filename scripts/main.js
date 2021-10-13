var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { News } from './noticias.js';
let botsearch = document.querySelector('#button-search');
const news = new News;
botsearch.addEventListener('click', function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        let qs = document.getElementById('searchbar').value;
        //console.log(qs);
        news.getAll(qs).then(response => {
            //console.log(response.data.articles);
            const templateSource = document.getElementById('news-template').innerHTML;
            const template = Handlebars.compile(templateSource);
            const resultHtml = template({
                news: response.data.articles
            });
            //console.log(resultHtml)
            document.getElementById('news').innerHTML = resultHtml;
        });
    });
});
