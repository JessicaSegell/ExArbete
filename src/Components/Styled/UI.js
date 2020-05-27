import styled from 'styled-components';

export const MenuItem = styled.TouchableOpacity`
    width: ${(props) => props.width || "40%"};
    height: ${(props) => props.height || "30%"};
    margin: 3px;
    background-color: white;
    border-radius: 5px;
    border: 2px;
    border-color: white;
`;

export const SmallButton = styled.TouchableOpacity`
    border-width: 2px;
    border-radius: 5px;
    border-color: white;
    margin: 10px;
`

export const CheckBox = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-width: 2px;
    border-color: grey;
    align-self: center;
    justify-content: center;
    margin: 10px;
`;

export const CheckMark = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
`;
