import styles from './Component1.module.css'
const index = () => {
  return (
    <div>
      <h1 className={styles.heading}>Component 1</h1>
      <p className={styles.para}>This is component 1</p>
      <button className={styles.button}>Button 1</button>
    </div>
  );
};

export default index;
