import BaseButton from './BaseButton';
import MixButton from './MixButton';
import IconButton from './IconButton';
import Link from 'next/link';

const LinkButton = ({ path, buttonType, target, ...props }) => {
  const ButtonComponent =
    buttonType === 'mix' ? MixButton : buttonType === 'icon' ? IconButton : BaseButton;

  return (
    <Link href={path} target={target}>
      <ButtonComponent {...props} />
    </Link>
  );
};

export default LinkButton;
