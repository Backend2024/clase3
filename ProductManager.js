const fs = require('fs');

class ProductManager {
    constructor(filePath) {
        this.filePath = filePath;
        this.products = this.readFromFile();
        this.nextId = this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    }

    readFromFile() {
        try {
            return JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
        } catch (error) {
            return [];
        }
    }

    writeToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2), 'utf8');
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (this.products.some(product => product.code === code)) {
            throw new Error("El código del producto ya existe");
        }
        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
        this.writeToFile();
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }

    updateProduct(id, updatedProduct) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            throw new Error("Producto no encontrado");
        }
        this.products[index] = {...this.products[index], ...updatedProduct};
        this.writeToFile();
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            throw new Error("Producto no encontrado");
        }
        this.products.splice(index, 1);
        this.writeToFile();
    }
}

module.exports = ProductManager;