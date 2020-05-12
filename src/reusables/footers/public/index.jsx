import renderer from '../../../init/renderer'
import styles from './styles.css'

export default () => (
  <footer className={styles.info}>
    <p>Double-click to edit a todo</p>
    <p>Created by <a href="https://www.glue.codes">GlueCodes</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
)
