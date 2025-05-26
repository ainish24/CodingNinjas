import styles from './Component2.module.css'
const index = () => {
  return (
    <div>
      <h1 className={styles.heading}>Component 2</h1>
      <p className={styles.para}>This is component 2</p>
      <button className={styles.button}>Button 2</button>
    </div>
  );
};

export default index;
