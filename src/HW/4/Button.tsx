type ButtonPropsType = {
<<<<<<< HEAD
  callBack: any // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: any // НУЖНО ПРОТИПИЗИРОВАТЬ
=======
  callBack: ()=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
>>>>>>> origin/main
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
<<<<<<< HEAD
    // НУЖНО ДОПИСАТЬ
=======
    props.callBack()
>>>>>>> origin/main
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
