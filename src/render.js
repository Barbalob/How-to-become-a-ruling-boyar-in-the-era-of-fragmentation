const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
  };
  
  function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
  
    return newElement.firstElementChild;
  }
  
  function render(component, container, place = RenderPosition.BEFOREEND) {
    container.insertAdjacentElement(place, component.element);
  }

  function renderHTML(component, container, place = RenderPosition.BEFOREEND) {
    container.insertAdjacentHTML(place, component);
  }
  
  export {RenderPosition, createElement, render, renderHTML};