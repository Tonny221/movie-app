import LogoImg from '../../images/react-movie-logo.svg';
import TMBDlogoImage from '../../images/tmdb_logo.svg';

import { Wrapper, Content, Logo, TMDBLogo } from './Header.styles';

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Logo src={LogoImg} />
                <TMDBLogo src={TMBDlogoImage} />
            </Content>
        </Wrapper>
    );
}

export default Header;