export class Suggestions{
    urlBase= '';

    constructor (urlBase){
       this.urlBase= urlBase; 
    }

    async getSuggestions(){
        const url= this.urlBase+'suggestions/recently-viewed-products';
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const error= await response.json();
            throw error;
        }
        const suggestions= await response.json();
        return suggestions;
    }

    async getSuggestion(id){
        const url= this.urlBase+'suggestions/recently-viewed-products/' + id;
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const error= await response.json();
            throw error;
        }
        const suggestion= await response.json();
        return suggestion;
    }
}