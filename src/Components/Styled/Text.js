import styled from 'styled-components';

export const HeaderText = styled.Text`
    color: ${(props) => props.color || 'white'};
    font-size: 28px;
    font-family: kalam-bold;
    margin: 5px;
    text-align: center;
`;

export const SubHeaderText = styled.Text`
    color: ${(props) => props.color || 'white'};
    font-size: 24px;
    font-family: kalam-regular;
    margin: 5px;
    text-align: center;
`;

export const SmallText = styled.Text`
    color: ${(props) => props.color || 'white'};
    font-size: 22px;
    font-family: kalam-regular;
    margin: 5px;
    text-align: center;
`;
