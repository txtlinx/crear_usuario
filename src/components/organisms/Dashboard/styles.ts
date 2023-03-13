import styled from 'styled-components';
import { colors } from '../../../consts/colors';
import { devices } from '../../../consts/devices';
const { gray } = colors;
export const DashboardStyle = styled.div`
  display: flex;
  padding-top: 47px;

    @media screen and (max-width: ${devices.desktop}) {
      width: 100%;
      justify-content: center;
      padding: 24px;
      & > :first-child {
        width: 100%;
      }
    }

    @media screen and (min-width: ${devices.tablet}) and (max-width: ${devices.desktop}) {
      padding: 7px;
      flex-direction: column;

      & > :last-child {
        display: flex;
        flex-direction: row;
        gap: 24px;
      }
    }

    @media screen and (max-width: ${devices.tablet}) {
      padding: 7px;
      flex-direction: column;
      & > :last-child {
        display: flex;
        flex-direction: column;
        gap: 11px;
      }
    }
  }

  & > :last-child {
    flex-grow: 2;
    flex-shrink: 2;
  }

  @media screen and (max-width: ${devices.desktop}) {
    & > :last-child {
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
`;

export const Skeleton = styled.div`
  background-color: ${gray.shade10};
  flex-grow: 1;
  height: 50px;
  border-radius: 8px;
`;
