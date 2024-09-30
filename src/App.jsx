import styles from './styles/App.module.css';
import { Component } from 'react';
import { data } from './consts';
import Card from './components/card/Card.jsx';
import Layout from './components/layout/Layout.jsx';

class App extends Component {
  render() {
    return (
      <section className={styles.app}>
        <Layout>
          {
            data.map(item => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))
          }
        </Layout>
      </section>
    )
  }
}

export default App