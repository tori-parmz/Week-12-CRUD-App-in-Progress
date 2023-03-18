//get things with JQuery & variables
let selection = $('select');

//class for menu category
//need the selector index number to indicate the name for the catogory
//need to be able to limit categories to 0-4 and not repeat
class MenuCategory {
    constructor(selection.options[selection.selectedIndex]) {
        this.options = ['Appetizers', 'Salads', 'Entrées', 'Desserts', 'Drinks'];
        this.items = [];
        this.name = this.options[selection.selectedIndex];

        
    }
    testCategory() {
        console.log(i);
    }
    addMenuItem(name, price, description) {
        this.menuItems.push(new MenuItem(name, price, description));
    }
}

//class for menu item
class MenuItem {
    constructor(name, price, description) { //menu items will take a name, dollar amount price, and 1-2 sentence description
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
//need to be able to get the data from the API


class MenuService {
    static url = "https://64150cdae8fe5a3f3a143d74.mockapi.io/categories";
    static getAllCategories() {
        return $.get(this.url);

    }

    static getCategory(id) {
        return $.get(this.url + `/${id}`);
    }

    static createCategory(menuCategory) {
        return $.post(this.url, menuCategory);
    }

    static updateCategory(menuCategory) {

        return $.ajax({
            url: this.url + `/${menuCategory._id}`,
            dataType: "json",
            data: JSON.stringify(menuCategory),
            contentType: 'application/json',
            type: 'PUT'

        });
    }

    static deleteCategory(id) {
        return $.ajax({
        url: this.url + `/${id}`,
        type: 'DELETE'

        });
    }
}

MenuService.getAllCategories();






//need to be able to post

//need to be able to limit categories to 0-4 and not repeat

//need to be able to add category items

//need to be able to delete items and categories