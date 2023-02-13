
const sort = document.querySelector('.products__sort');
const sortButton = sort.querySelector('.products__sort-button');
const sortList = sort.querySelector('.products__sort-list');
let selectedItem = sort.querySelector('.products__sort-item--selected');

sort.classList.remove('products__sort--nojs');

sortButton.addEventListener('click', () => {
  if (sort.classList.contains('products__sort--closed')) {
    sort.classList.remove('products__sort--closed');
    sort.classList.add('products__sort--opened');
  } else {
    sort.classList.add('products__sort--closed');
    sort.classList.remove('products__sort--opened');
  }
});

const chooseSorting = (evt) => {
  const checkedItem = evt.target;
  selectedItem.classList.remove('products__sort-item--selected');
  checkedItem.classList.add('products__sort-item--selected');
  selectedItem = checkedItem;
  sortButton.textContent = checkedItem.textContent;
  sort.classList.add('products__sort--closed');
  sort.classList.remove('products__sort--opened')
};

sortList.addEventListener('click', chooseSorting);

sortList.addEventListener('keydown', (evt) => {
  if (evt.code === "Enter") {
    chooseSorting(evt);
  }
});
