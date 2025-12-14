export const scrollToContent = (e, param) => {
    e.preventDefault()
    const element = document.getElementById(param)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

export const handleParallax = (param) => {

    const items = document.querySelectorAll(param);

    items.forEach(item => {
      const speed = item.getAttribute('data-speed');
      const direction = item.getAttribute('data-direction') ?? 'Y'
      const plusMinus = item.getAttribute('data-plusminus') ?? 'plus'
      const poin = window.scrollY * speed;
      item.style.transform = `translate${direction}(${plusMinus == 'minus' ? '-' : ''}${poin}px)`;
    });
};