import style from "./Spinner.module.css"

const Spinner = () => {
    return (
      <div className={style.parent}>
        <div className={style.loader}></div>
      </div>
    );
}

export default Spinner;