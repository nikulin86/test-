const burger = document.querySelector('.burger__menu');
const burgerButton = document.querySelector('.button__burger')

burgerButton.addEventListener('click', (event) => {
    burger.classList.toggle('active')

  if (burger.classList.contains('active')) {
    hideScroll()
  } else {
    showScroll()
  }
})



// функции которые прячут скролл и возвращают
const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;
  
    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';
  
  
  }
  
  const showScroll = () => {
  
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';
  
  
  }


  // get scrollbar width
const getScrollbarWidth = () => {
  const outer = document.createElement('div');

  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';


  document.body.appendChild(outer);
  const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return scrollBarWidth;
}