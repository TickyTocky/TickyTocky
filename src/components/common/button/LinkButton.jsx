import Link from 'next/link';
import BaseButton from './BaseButton';
import MixButton from './MixButton';
import IconButton from './IconButton';

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
