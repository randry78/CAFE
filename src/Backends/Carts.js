export class Carts{
    
    urlBase= '';

    constructor (urlBase){
       this.urlBase= urlBase; 
    }

    async getAll(){
        const url= this.urlBase+'cart';
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const message = 'Ooops! Une erreur se produit, Code erreur: ' + response.status;
            throw new Error(message);
        }
        const carts= await response.json();
        return carts;
    }

    async update(productId, quantity){
        const url= this.urlBase+'/cart/modify-product-quantity/'+ productId;
        const response= await fetch(url, {method: 'PATCH', body: JSON.stringify({quantity: quantity}), 
                                          headers: {'Content-type': 'application/json; charset=UTF-8'}
                                    });
        if (!response.ok) {
            throw new Error(response);
        }
    }

    /*async searchProducts(motcle){
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
    }*/
}