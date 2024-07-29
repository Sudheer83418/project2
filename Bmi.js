import React, { useState } from 'react';
import pic from './BMI1.png';
import pic1 from './Bmib 1.png';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightMeters = height / 100;
      const bmiValue = weight / (heightMeters * heightMeters);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else if (bmi >= 30) {
      return 'Obesity';
    } else {
      return '';
    }
  };
  

  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '20px',
      backgroundImage: 'url(bmibg.jpg)',
      
    },
    
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    col: {
      flex: '1 1 50%',
      marginBottom: '30px',
      
    },
    card: {
      backgroundColor: '#fdf7f7',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      height:"550px"
      
    },
    bmiContainer: {
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    inputLabel: {
      fontWeight: 'bold',
      marginRight: '10px',
    },
    input: {
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '150px',
    },
    result: {
      marginTop: '20px',
    },
    resultH2: {
      fontSize: '23px',
      marginBottom: '10px',
    },
    button: {
      color: 'black',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      backgroundColor:"orange"
    },
    cardH3: {
      marginBottom: '10px',
    },
    cardImg: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    cardUl: {
      listStyleType: 'none',
      padding: '0',
    },
    cardLi: {
      marginBottom: '5px',
    },
    
  };

  return (
    <div className='conatainer-fluid bg-dark'>
    <div style={styles.container}>
      <div className="row" style={styles.row}>
        <div className="col" style={styles.col}>
          <div className="card " style={styles.card}>
            <div className="A" style={styles.bmiContainer}>
              <div className="bmi-container ">
                <h1>BMI Calculator</h1>
                <img src={pic1} alt="BMI Categories" style={styles.cardImg} />
                <div className="input-group" style={styles.inputGroup}>
                  <label htmlFor="weight" style={styles.inputLabel}>
                    Weight (kg):{' '}
                  </label>
                  <input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={handleWeightChange}
                    placeholder="Enter weight in kg"
                    style={styles.input}
                  />
                </div>
                <div className="input-group" style={styles.inputGroup}>
                  <label htmlFor="height" style={styles.inputLabel}>
                    Height (cm):{' '}
                  </label>
                  <input
                    id="height"
                    type="number"
                    value={height}
                    onChange={handleHeightChange}
                    placeholder="Enter height in cm"
                    style={styles.input}
                  />
                </div>
                <button onClick={calculateBMI} style={styles.button}>
                  Calculate BMI
                </button>
                {bmi !== null && (
                  <div className="result" style={styles.result}>
                    <h2 style={styles.resultH2}>Your BMI: {bmi.toFixed(2)}</h2>
                    <h2> {getBMICategory(bmi)}</h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col" style={styles.col}>
          <div className="card" style={styles.card}>
            <h3 style={styles.cardH3}>BMI Categories</h3>
            <img src={pic} alt="BMI Categories" style={styles.cardImg} />
            <ul style={styles.cardUl}>
              <li style={styles.cardLi}>Underweight: BMI less than 18.5</li>
              <li style={styles.cardLi}>Normal weight: BMI 18.5–24.9</li>
              <li style={styles.cardLi}>Overweight: BMI 25–29.9</li>
              <li style={styles.cardLi}>Obesity: BMI 30 or higher</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Bmi;
