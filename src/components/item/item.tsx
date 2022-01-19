import styles from "./item.module.scss";

interface Props {
  index: number;
}

function Item(props: Props) {
  return <div className={styles.item}>{props.index}</div>;
}

export default Item;
