import { BsFillAlarmFill } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { CardWraper, Image, RecipeInfo, InfoBlock, BadgeList, Badge} from './Recipe.styled';

export const Recipe = ({
  recipe: { name, image, time, servings, calories, difficulty },
}) => {
  return (
    <CardWraper>
      <h2>{name}</h2>
      <Image src={image} alt={name} width="300" />
      <RecipeInfo>
        <InfoBlock>
          <BsFillAlarmFill size={24} />
          {time} min
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartPie size={24} />
          {servings} servings
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartBar size={24} />
          {calories} calories
        </InfoBlock>
      </RecipeInfo>
      <div>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge variant = "easy" isActive={difficulty === 'easy'}>Easy</Badge>
          <Badge variant = "medium" isActive={difficulty === 'medium'}>Medium</Badge>
          <Badge variant = "hard" isActive={difficulty === 'hard'}>Hard</Badge>
        </BadgeList>
      </div>
    </CardWraper>
  );
};

// props

Recipe.propTypes = {
  recipe: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }).isRequired,
};
