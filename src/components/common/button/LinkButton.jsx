import Link from 'next/link';
import BaseButton from '@/components/common/button/BaseButton';
import MixButton from '@/components/common/button/MixButton';
import IconButton from '@/components/common/button/IconButton';

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
