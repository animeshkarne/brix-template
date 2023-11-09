import React, { useState } from 'react';
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Form1 from './components/Forms/Form1';
import Button from './components/Button/Button';
import Footer from './components/Footer';
import Form2 from './components/Forms/Form2';
import Form3 from './components/Forms/Form3';
import Form4 from './components/Forms/Form4';

interface AppProps {
  // Define any props your App component expects here
}

const App: React.FC<AppProps> = () => {

  const [step, setStep] = useState<number>(1);


  return (
    <div className="App">
      <Header />
      <div className="web-body">
        <div className="body-text">
          <h2>Get a project quote</h2>
          <p>Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</p>

        </div>
        <div className="form-body">
          <div className='progress-bar-container'><ProgressBar currentStep={step}/></div>
          <hr />
          {step == 1 && (<Form1 />)}{step == 2 && (<Form2 />)}{step == 3 && (<Form3 />)}{step == 4 && (<Form4 />)}
        </div>
        <div className='navigate-btns' >
          {step !== 1 && (
            <button 
              className='prevBtn'
              onClick={() => { setStep((prev)=>prev-1)}}
            >Previous Step</button>
          )}
          {step !== 4 && (
            <Button
              text='Next Step'
              onClick={() => { setStep((prev)=>prev+1)}}
            />
          )}
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
