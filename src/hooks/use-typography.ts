import { useState } from 'react';

interface TypographyState {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
}

interface TypographyActions {
  setBold: (value: boolean) => void;
  setItalic: (value: boolean) => void;
  setUnderline: (value: boolean) => void;
  getClassName: () => string;
}

const useTypography = (
  initialState: Partial<TypographyState> = {},
): TypographyState & TypographyActions => {
  const [isBold, setIsBold] = useState(initialState.isBold ?? true);
  const [isItalic, setIsItalic] = useState(initialState.isItalic ?? false);
  const [isUnderline, setIsUnderline] = useState(
    initialState.isUnderline ?? false,
  );

  const getClassName = () => {
    const classes = [];
    if (isBold) classes.push('font-bold');
    else classes.push('font-normal');

    if (isItalic) classes.push('italic');
    else classes.push('not-italic');

    if (isUnderline) classes.push('underline underline-offset-[0.5em]');
    else classes.push('no-underline');

    return classes.join(' ');
  };

  return {
    isBold,
    isItalic,
    isUnderline,
    setBold: setIsBold,
    setItalic: setIsItalic,
    setUnderline: setIsUnderline,
    getClassName,
  };
};

export default useTypography;
