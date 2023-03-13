import {
  ContentContainer,
  FooterStyled,
  IconContainer,
  Offset,
} from './styles';
import { ReactComponent as Youtube } from '../../../assets/img/Youtube.svg';
import { ReactComponent as Instagram } from '../../../assets/img/Instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/img/Facebook.svg';
import { ReactComponent as Twitter } from '../../../assets/img/Twitter.svg';
import { ReactComponent as Linkedin } from '../../../assets/img/Linkedin.svg';
import { ReactComponent as Tiktok } from '../../../assets/img/Tiktok.svg';
import { Icon } from './styles';

const Footer = () => {
  return (
    <FooterStyled>
      <Offset left />

      <ContentContainer>
        <section>
          <p>
            Infórmese sobre la garantía estatal de los depósitos en su banco o
            en{' '}
            <a href="https://www.cmfchile.cl" target="_blank" rel="noreferrer">
              www.cmfchile.cl
            </a>
          </p>
          <p>
            © 2022 Banco Itaú. Todos los derechos reservados. Av. Presidente
            Riesco 5537, Las Condes. Santiago de Chile.
          </p>
        </section>
        <IconContainer>
          <Icon href="https://www.youtube.com/itauchile" target="_blank">
            <Youtube data-testid="youtube" />
          </Icon>
          <Icon href="https://www.instagram.com/itauchile/" target="_blank">
            <Instagram className="hide" data-testid="instagram" />
          </Icon>
          <Icon href="https://es-la.facebook.com/itauchile" target="_blank">
            <Facebook className="hide" data-testid="facebook" />
          </Icon>
          <Icon href="https://twitter.com/itauchile" target="_blank">
            <Twitter className="hide" data-testid="twitter" />
          </Icon>
          <Icon
            href="https://www.linkedin.com/company/itauchile/?originalSubdomain=cl"
            target="_blank"
          >
            <Linkedin />
          </Icon>
          <Icon href="https://www.tiktok.com/@itauchile" target="_blank">
            <Tiktok className="hide" data-testid="tiktok" />
          </Icon>
        </IconContainer>
      </ContentContainer>
      <Offset />
    </FooterStyled>
  );
};

export default Footer;
