// import { RecipeList } from "./RecipeList/RecipeList";
// import recipes from '../recipes.json';
import {Counter} from './Counter/Counter'

export const App = () => {
  return (
    <>
      {/* <RecipeList recipes={recipes} /> */}
      <h1>State components</h1>
      <Counter initialValue={10} />
    </>
  );
};

