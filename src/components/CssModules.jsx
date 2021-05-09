import cls from "./CssModules.module.scss";

export const CssModules = () => {
  // const { container, title, button } = cls;
  return (
    // className
    <div className={cls.container}>
      <p className={cls.title}> -CssModules- </p>
      <button className={cls.button}>FIGHT</button>
    </div>
  );
};

// CssModules -> CssModules.module.scss

//module"s".scss にしないようにする！！！！　→　読み込まない！
