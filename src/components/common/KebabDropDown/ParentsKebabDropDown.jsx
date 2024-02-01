import KebabDropDown from '.';

const ParentKebabDropDown = () => {
  const onClickInput = (value) => ({ value });
  return (
    <>
      <KebabDropDown onClickInput={onClickInput} />
    </>
  );
};

export default ParentKebabDropDown;
