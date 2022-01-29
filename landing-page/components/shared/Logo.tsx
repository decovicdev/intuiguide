import fixSrcWithBasePath from '../../utils/fixSrcWithBasePath';
import Image from './Image';
import Link from './Link';

interface LogoProps {}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link href='/'>
      <Image
        h={['28px', '52px']}
        w={['122px', '218px']}
        src={fixSrcWithBasePath('/images/logo.png')}
        alt='logo'
      />
    </Link>
  );
};
export default Logo;