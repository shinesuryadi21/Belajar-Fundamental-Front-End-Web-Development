class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
                   background: darkblue;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .fan-art-meal {
                object-fit: cover;
                height: 20%;
                width: 30%;
                border: 10px solid white;
                
                 
               }
              
               .meal-info {
                   padding: 24px;
               }
              
               .meal-info > h2 {
                   font-weight: lighter;
                   text-align: center;
                   color: blue;
               }
              
               .meal-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   text-align: justify;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }
               .meal-info > h3{
                   color : black;
               }

           </style>
           
           <div class="meal-info">
           <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
               <h2>${this._meal.strMeal}</h2>
               <h3>${this._meal.strArea}</h3>
               <p>${this._meal.strInstructions}</p>
           </div>`;
    }
}

customElements.define("meal-item", MealItem);