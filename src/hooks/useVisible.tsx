import { useState } from 'react';

/**
 * useVisible Custom Hook
 * @returns [isVisible - boolean, handleChangeVisible - () => void]
 */

const useVisible = (): [boolean, () => void] => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisible = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return [isVisible, handleChangeVisible];
};

export default useVisible;
