window.MyApp = window.MyApp || {};

// Konstruktor
function ImageItem(url, title) {
    this.url = url;
    this.title = title;
}

ImageItem.prototype.getDescription = function () {
    return `${this.title} (${this.url})`;
};

// namespace !
window.MyApp.ImageItem = ImageItem;