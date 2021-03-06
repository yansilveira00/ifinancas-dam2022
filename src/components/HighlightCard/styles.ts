import styled, { css} from "styled-components/native";
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: 'income' | 'expense' | 'total';
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(280)}px;
    height: ${RFValue(120)}px;;
    border-radius: 10px;
    padding: 19px 12px;
    padding-bottom: ${RFValue(50)}px;
    margin-right: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.incomeTitle};
`;

export const Icon = styled(SimpleLineIcons)<TypeProps>`
    font-size: ${RFValue(36)}px;
    ${(props) => props.type === 'income' && css`
        color: ${({ theme }) => theme.colors.income};
    `}
    ${(props) => props.type === 'expense' && css`
        color: ${({ theme }) => theme.colors.expense};
    `}
`;

export const IconTotal = styled(FontAwesome)<TypeProps>`
    font-size: ${RFValue(36)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.valueCard};
    margin-top: ${RFValue(0)}px;;
`;

export const LastTransaction = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.lastTransaction};
`;