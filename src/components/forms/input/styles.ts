import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.cinza};
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.title};
    
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;

    padding: 18px 16px;
    margin-bottom: 8px;
`;