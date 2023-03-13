import { Arrows, BoxFromTo, ContainerModalStyles, Modal } from './styles';
import { ReactComponent as FromTo } from '../../../assets/img/IconoEmpresa.svg';
import { labels } from '../../../consts/labels';
import { RefObject, useEffect, useRef, useState } from 'react';
import useStore from '../../../hooks/useStore';

const ChangingCompany = () => {
  const [{ changeCompany }] = useStore();
  const [companyFrom, setCompanyFrom] = useState<string>('');
  const [companyTo, setCompanyTo] = useState<string>('');
  const from = useRef<HTMLParagraphElement | null>(null);
  const to = useRef<HTMLParagraphElement | null>(null);

  const handleLarge = (ref: RefObject<HTMLParagraphElement>) => {
    if (
      ref.current?.textContent !== undefined &&
      ref.current?.textContent !== null &&
      Number(ref.current?.textContent?.length) > 45
    )
      ref.current.textContent = `${ref.current.textContent
        .slice(0, 44)
        .trim()}...`;
  };

  useEffect(() => {
    handleLarge(from);
    handleLarge(to);
  }, []);
  useEffect(() => {
    setCompanyFrom(changeCompany.from);
    setCompanyTo(changeCompany.to);
  }, [changeCompany]);

  return (
    <ContainerModalStyles
      $display={changeCompany.display}
      data-testid="container-changing-modal"
    >
      <Modal>
        <div>
          <h3>{labels.CHANGINGCOMPANY.TITLE}</h3>
          <p>{labels.CHANGINGCOMPANY.MESSAGE}</p>
        </div>
        <div>
          <BoxFromTo>
            <div>
              <FromTo />
              <p>{labels.CHANGINGCOMPANY.FROM}</p>
            </div>
            <p ref={from}>{companyFrom}</p>
          </BoxFromTo>
          <Arrows>
            <div />
            <div />
            <div />
          </Arrows>
          <BoxFromTo>
            <div>
              <FromTo />
              <p>{labels.CHANGINGCOMPANY.TO}</p>
            </div>
            <p ref={to}>{companyTo}</p>
          </BoxFromTo>
        </div>
      </Modal>
    </ContainerModalStyles>
  );
};

export default ChangingCompany;
