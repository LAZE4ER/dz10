import './styles/index.scss';
import menu from "./data/menu.json"
import productTemplate from"./partials/product.hbs"

const productElem = document.querySelector('.menu')
const changeTheme = document.querySelector(".theme-switch__toggle")
const bodyTheme = document.querySelector('body')

const html = menu.map((dishes) => productTemplate(dishes)).join('')

productElem.insertAdjacentHTML('beforeend', html)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const theme = localStorage.getItem("Theme")
console.log(theme)

function changeThemes(themeName){
    localStorage.setItem("Theme",themeName)
    bodyTheme.classList.add(themeName)
    if(themeName === Theme.LIGHT){
        bodyTheme.classList.remove(Theme.DARK)
    }else{
        bodyTheme.classList.remove(Theme.LIGHT)
    }

}
changeTheme.addEventListener('click', (e) =>{
    if(e.target.checked){
        changeThemes(Theme.DARK)
    }else{
        changeThemes(Theme.LIGHT)
    }
})
function SaveToLocal(theme){
    if(theme != null){
        changeThemes(theme)
    }else{
        changeThemes(Theme.LIGHT)
    }
    if(theme===Theme.DARK){
        changeTheme.checked = true
    }
}
SaveToLocal(theme)

