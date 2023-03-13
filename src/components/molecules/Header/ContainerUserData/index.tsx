import { AnimatePresence } from 'framer-motion';
import React, { Fragment, ReactElement } from 'react';
import { StylesMotion, TopTriangle } from '../ContainerChangeCompany/styles';
import { ContainerUserDataStyle } from './styles';

const ContainerUserData = ({
  children,
  showUserData,
}: {
  children: ReactElement;
  showUserData: boolean;
}) => {
  return (
    <AnimatePresence>
      {showUserData && (
        <Fragment>
          <TopTriangle
            $userData
            animate={StylesMotion(showUserData).TopTriangle.animate}
            exit={StylesMotion(showUserData).TopTriangle.exit}
          />
          <ContainerUserDataStyle
            animate={
              StylesMotion(showUserData).ContainerChangeCompanyStyle.animate
            }
            initial={
              StylesMotion(showUserData).ContainerChangeCompanyStyle
                .initialAndExit
            }
            exit={
              StylesMotion(showUserData).ContainerChangeCompanyStyle
                .initialAndExit
            }
            transition={
              StylesMotion(showUserData).ContainerChangeCompanyStyle.transition
            }
          >
            {children}
          </ContainerUserDataStyle>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default ContainerUserData;
