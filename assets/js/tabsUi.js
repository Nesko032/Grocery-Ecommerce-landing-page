const tabItems = $$(".product-tab__item");
const tabContents = $$(".product-tab__content");

tabItems.forEach((tabItem, index) => {
    const tabContent = tabContents[index];

    tabItem.onclick = function () {
        $(".product-tab__item.product-tab__item--current").classList.remove("product-tab__item--current");
        $(".product-tab__content.product-tab__content--current").classList.remove("product-tab__content--current");

        tabItem.classList.add("product-tab__item--current");
        tabContent.classList.add("product-tab__content--current");
    };
});
