import React from 'react';
import { CustomButton } from './ButtonStyles';

const NavButton = props => {
  let btnName = props.name;
  let color = props.color;
  let bgColor = props.bgColor;
  let border = props.border;
  let hoverFontColor = props.hoverFontColor;
  let borderColor = props.borderColor;
  let onClick = props.onClick;
  let fontSize = props.fontSize;
  let width = props.width;
  let mobileFontSize = props.mobileFontSize;
  let mobileWidth = props.mobileWidth;
  let mobileHeight = props.mobileHeight;

  return (
    <CustomButton
      color={color}
      bgColor={bgColor}
      border={border}
      hoverFontColor={hoverFontColor}
      borderColor={borderColor}
      onClick={onClick}
      width={width}
      fontSize={fontSize}
      mobileFontSize={mobileFontSize}
      mobileWidth={mobileWidth}
      mobileHeight={mobileHeight}
    >
      {btnName}
    </CustomButton>
  );
};

export default NavButton;
