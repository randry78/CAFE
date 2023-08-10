
export class Produits{
    
    urlBase= '';

    constructor (urlBase){
       this.urlBase= urlBase; 
    }

    async getProducts(){
        const url= this.urlBase+'products';
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const message = 'Ooops! Une erreur se produit, Code erreur: ' + response.status;
            throw new Error(message);
        }
        const products= await response.json();
        return products;
    }

    /*getProducts().then(products=>{

    }).catch(error=>{
        error.message
    })*/

    async getProduct(id){
        const url= this.urlBase+'products/'+ id;
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const message = 'Ooops! Une erreur se produit, Code erreur: ' + response.status;
            throw new Error(message);
        }
        const product= await response.json();
        return product;
    }

    async searchProducts(motcle){
        const url= this.urlBase+'products?search=' + motcle;
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const message = 'Ooops! Une erreur se produit, Code erreur: ' + response.status;
            throw new Error(message);
        }
        const products= await response.json();
        return products;
    }

    async getCategories(){
        const url= this.urlBase+'product-categories';
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const message = 'Ooops! Une erreur se produit, Code erreur: ' + response.status;
            throw new Error(message);
        }
        const categories= await response.json();
        return categories;
    }

    async getColors(){
        const url= this.urlBase+'product-colors';
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const message = 'Ooops! Une erreur se produit, Code erreur: ' + response.status;
            throw new Error(message);
        }
        const colors= await response.json();
        return colors;
    }
}