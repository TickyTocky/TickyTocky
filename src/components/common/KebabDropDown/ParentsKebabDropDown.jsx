import KebabDropDown from '.';

const ParentKebabDropDown = () => {
  const onClickInput = (value) => {
    console.log(value);
  };
  return (
    <>
      <KebabDropDown onClickInput={onClickInput} size='lg' />
    </>
  );
};

export default ParentKebabDropDown;
