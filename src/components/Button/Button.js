import React from 'react';
import { CustomButton } from './ButtonStyles';

const NavButton = props => {
  const btnName = props.name;
  const color = props.color;
  const bgColor = props.bgColor;
  const border = props.border;
  const hoverFontColor = props.hoverFontColor;
  const borderColor = props.borderColor;
  const onClick = props.onClick;
  const fontSize = props.fontSize;
  const width = props.width;
  const mobileFontSize = props.mobileFontSize;
  const mobileWidth = props.mobileWidth;
  const mobileHeight = props.mobileHeight;

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
