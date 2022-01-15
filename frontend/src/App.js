import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <h1>Hello world</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
