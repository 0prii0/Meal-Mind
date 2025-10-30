export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strSource?: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string | undefined;
[key: `strMeasure${number}`]: string | undefined;

}