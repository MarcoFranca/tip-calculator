# Frontend Mentor - Tip calculator app

This is a solution to the ![Design preview for the Tip calculator app coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

This challenge is to build out this tip calculator app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

----
### Screenshot

- Desktop Design

![Design preview for the tip calculator app challenge](./public/localhost_63342_tip-calculator-app-main_index.html_(Nest%20Hub%20Max).png)

- mobile design

![Design preview for the tip calculator app challenge](./public/localhost_63342_tip-calculator-app-main_index.html_(iPhone%20XR).png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/responsive-landing-page-using-css-flex-grid-PcHfWk7wds)
- Live Site URL: [Add live site URL here](https://marcofranca.github.io/tip-calculator/)

---
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- desktop-first
- JavaScript

### What I learned

_**in addition to reinforcing my knowledge in HTML and CSS,**_

- I learned to use the `DOM` in `javaScript`

- I learned how to use `Document.querySelector` to capture `tags` from `html`

```javascript
const peaple =  document.querySelector('#numPeaple')
const customTip = form.querySelector("#customTip")
```

- I learned to use `form` instead of `document`, to improve the performance of my code

```javascript
const peaple =  document.querySelector('#numPeaple')
```

- I learned to use event listeners instead of putting events inside the html, thus improving the performance in search engines

```javascript
resetButton.addEventListener('click', ()=>{reset()})
```

- I learned to use the `Element.innerHTML` property to change the `html` value of the selected tag

```javascript
form.addEventListener('click', (e)=>{
  e.preventDefault()
  if (e.target.id === 'customTip'){
    e.target.removeEventListener('click',()=>{
    })
    customTip.addEventListener('keyup', (e)=>{
      if (e.target.value.length > 3 || e.target.value > 100){
        tip = e.target.value = 100
        console.error("o valor só pode ir até 100%")
      }else {
        tip = e.target.value / 100
      }})
  }else{
    tip = e.target.id /100
  }

})
```

- I learned to use the `element.value` property to get or change the value contained in the captured tag

```javascript
const clearValue = function () {
  bill.value = ''
  peaple.value = ''
  customTip.value = ''
}
```

- I learned to use the `event.target` property to capture the content of the tag that is in use at the time event

```javascript
bill.addEventListener('keyup', (e)=>{
  if (e.target.value.length > 9 || e.target.value > 999999.99)
    e.target.value = 999999.99
  currency(e.target.value)
})
```

- I learned to use `Intl.NumberFormat` to change the format of the value written in the current currency

````javascript
const currency = function(number){
    return new Intl.NumberFormat('en-br',
        {style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2}).format(number);
};
````

---

## Author
- Linkdin - [Marco Tullio Franca](https://www.linkedin.com/in/marco-franca/)
- Frontend Mentor - [@MarcoFranca](https://www.frontendmentor.io/profile/MarcoFranca)

## Acknowledgments
- [Pedro Marins](https://www.linkedin.com/in/pedromarins/)
- [Henrique de Andrade](https://www.linkedin.com/in/henrique-de-andrade/)

**to do list**

- [x] get the account amount typed in the input
  - [x] validate input value
- [x] select a fee to be paid
- [x] catch a number of people
- [x] print the information
- [x] reset by clicking reset button
- [x] submit the form
