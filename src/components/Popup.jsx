import styles from "./Popup.module.css"


const Popup = (props) => {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles["popup-inner"]}>
                <button
                    className={styles["close-btn"]}
                    onClick={() => props.setTrigger(false)}>X
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
};
export default Popup;