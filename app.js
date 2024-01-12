let inputSearch = document.querySelector('input')
let productName = document.querySelectorAll('.product-name')
let listProduct = document.querySelector('.list-product')
let itemProduct = document.querySelectorAll('.product-item')
console.log(itemProduct)


inputSearch.addEventListener('input',function(e){
    let input = e.target.value.trim().toLowerCase()
    itemProduct.forEach(function(item){
        if(item.innerText.toLowerCase().includes(input))
        {
            item.classList.remove('hide')
        }
        else
        {
            item.classList.add('hide')
        }
    });
    
})