import { colors } from './colors';
const { black, gray } = colors;

const scrollCustom: string = `::-webkit-scrollbar{
    appearance: none;
  }
  ::-webkit-scrollbar{
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: ${black.shade3};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track{
  background-color: ${gray.shade6};
  border-radius: 8px;
  }
  ::-webkit-scrollbar-corner{
    appearance: none;
  }`;

export default scrollCustom;
