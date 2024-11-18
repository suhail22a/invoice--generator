import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        {/* Header Section */}
      <header className="app-header">
        <h1>Invoice Generator</h1>
        <p className="header-tagline">Create professional invoices with ease</p>
      </header>
        <Container>
          <InvoiceForm />
        </Container>
        {/* Footer */}
        <footer className="mt-4 text-center">
          <p className="mb-0">Made by ❤️ Suhail</p>
          <p>
            Check out my GitHub:{" "}
            <a
              href="https://github.com/suhail22a"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/suhail22a
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
