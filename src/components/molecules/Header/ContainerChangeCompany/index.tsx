import { AnimatePresence } from 'framer-motion';
import { Fragment, ReactElement } from 'react';
import { ContainerChangeCompanyStyle, TopTriangle } from './styles';
import { StylesMotion } from './styles';

const ContainerChangeCompany = ({
  children,
  showChangeCompany,
}: {
  children: ReactElement;
  showChangeCompany: boolean;
}) => {
  return (
    <AnimatePresence>
      {showChangeCompany && (
        <Fragment>
          <TopTriangle
            animate={StylesMotion(showChangeCompany).TopTriangle.animate}
            exit={StylesMotion(showChangeCompany).TopTriangle.exit}
          />
          <ContainerChangeCompanyStyle
            data-modal="true"
            animate={
              StylesMotion(showChangeCompany).ContainerChangeCompanyStyle
                .animate
            }
            initial={
              StylesMotion(showChangeCompany).ContainerChangeCompanyStyle
                .initialAndExit
            }
            exit={
              StylesMotion(showChangeCompany).ContainerChangeCompanyStyle
                .initialAndExit
            }
            transition={
              StylesMotion(showChangeCompany).ContainerChangeCompanyStyle
                .transition
            }
          >
            {children}
          </ContainerChangeCompanyStyle>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default ContainerChangeCompany;
