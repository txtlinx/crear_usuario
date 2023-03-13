import styled from 'styled-components';
import { colors } from '../../../../consts/colors';
import { devices } from '../../../../consts/devices';

const { black, white, orange } = colors;
export const PrettyButton = styled.input`
  background: white;
  border: none;

  padding: 15px 10px;
  width: 100%;
  font-size: 1.4rem;
  margin: 0px;
`;
export const ContainerFieldSet = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-around;
  with: 100%;
  padding: 0px;
`;

export const ContainerNewUser = styled.div`
  flex-direction: column;
  flex: auto;

  & > button {
    background: ${orange.shade2};
    border: 2px solid ${orange.shade3};
    border-radius: 8px;
    padding: 12.5px 40px;
    margin-left: auto;
    color: ${black.shade2};
    transition: all 0.5s ease;
    cursor: pointer;
    margin-left: 58%;
    margin-top: 24px;
    :hover {
      color: ${white};
      background: ${orange.shade3};
      border: 2px solid ${orange.shade3};
      border-radius: 8px;
      transition: all 0.5s ease;
    }

    :active {
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4));
    }
  }
`;
export const ContainerTitle = styled.div`
  & > h2 {
    color: #231d19;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 41px;
    margin-left: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  align-items: center;
`;

export const CardNewUserForm = styled.div`
  background-color: ${white};

  box-shadow: 0px 0.79px 1.57px rgba(91, 65, 73, 0.2);
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 32px;

  width: 600px;
  height: 375px;

  background: #ffffff;
  border-radius: 7px;

  order: 1;
  flex-grow: 0;
`;

export const CardNewUserFormHeaders = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 24px 24px 12px 24px;
  flex-direction: column;

  & > h3 {
    align-items: left;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
  }

  @media screen and (max-width: ${devices.tablet}) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  margin: 20px 10px;
  padding: 0px 0px 0px;

  width: auto;
  height: auto;

  background: #ffffff;

  order: 0;
  flex-grow: 1;

  align-items: flex-start;
`;
