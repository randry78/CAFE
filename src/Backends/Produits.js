
export default class Produits{
    
    urlBase= '';

    constructor (urlBase){
       this.urlBase= urlBase; 
    }

    async getProducts(){
        const url= this.urlBase+'products';
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const error= await response.json();
            throw error;
        }
        const products= await response.json();
        return products;
    }

    filterProduct(products, category=[], price={minPrice:0, maxPrice:0}, color= []){
        let produits1= products;
        let produits2= [];

        if (category.length > 0){
            for (const item of produits1){
                const isExist = (element) => element.id === item.category.id;
                const index= category.findIndex(isExist);
                if (index !== -1){
                    produits2.push(item);
                }
            }
            produits1= produits2.slice(0);
            produits2= [];
        }

        if (price.minPrice > 0 && price.maxPrice > 0){
            for (const item of produits1){
                if (price.min < item.price && item.price < price.maxPrice){
                    produits2.push(item);
                }
            }
            produits1= produits2.slice(0);
            produits2= [];
        }

        if (color.length > 0){
            for (const item of produits1){
                const isExist = (element) => element.id === item.color.id;
                const index= category.findIndex(isExist);
                if (index !== -1){
                    produits2.push(item);
                }
            }
            produits1= produits2.slice(0);
            produits2= [];
        }
        return produits1;
    }

    async getProduct(id){
        const url= this.urlBase+'products/'+ id;
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const error= await response.json();
            throw error;
        }
        const product= await response.json();
        return product;
    }

    async searchProducts(motcle){
        const url= this.urlBase+'products?search=' + motcle;
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const error= await response.json();
            throw error;
        }
        const products= await response.json();
        return products;
    }

    async getCategories(){
        const url= this.urlBase+'product-categories';
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const error= await response.json();
            throw error;
        }
        const categories= await response.json();
        return categories;
    }

    async getColors(){
        const url= this.urlBase+'product-colors';
        const response= await fetch(url, {method:'GET'});
        if (!response.ok) {
            const error= await response.json();
            throw error;
        }
        const colors= await response.json();
        return colors;
    }
}