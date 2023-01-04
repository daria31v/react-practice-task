import styled from 'styled-components';

export const CardWraper = styled.div`
padding: 8px;
`;

export const Image = styled.img`
display: block;
width: 400px;
height: 240px;
object-fit: cover;
`;

export const RecipeInfo = styled.div`
display: flex;
gap: 8px;
`;

export const InfoBlock = styled.p`
    margin:0;
    display: flex;
    align-items: center;
    padding: 8px 0;
    
    svg{
        color: green;
    }
`;
export const BadgeList = styled.div`
    display: flex;
    padding: 8px 0;
    gap: 8px;

`;
export const Badge = styled.span`
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;

    background-color: ${props => {
        let color;
        switch (props.variant) {
        case "easy":
            color = "green";
            break;
        case "medium":
            color = "blue";
            break;
        case "hard":
            color = "tomato";
            break;
        default:
            throw new Error('Unsupported variant prop');
    }
    return props.isActive ? color : "bisque";
    }};
`;
// easy - green
// medium - blue
// hard - tomato
// notActive - bisque

// just - isActive :
// background-color: ${props => {
// return props.isActive ? "red" : "gray";
// }};