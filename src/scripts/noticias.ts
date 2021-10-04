    
   declare let axios
    export class News{
        
        getAll(search: string){
            return axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=20b0ee5352f449f6905044bbf1e35375`);
        }
    }
