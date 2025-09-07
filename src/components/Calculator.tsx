import React, { useState, useEffect } from 'react';
import '../styles/Calculator.css';
import logo from '../Datalily_Logos_Digital_Icon_Azure.svg';
import { Link } from 'react-router-dom';

const Calculator: React.FC = () => {
    const [initialValue, setInitialValue] = useState<string>('');
    const [finalValue, setFinalValue] = useState<string>('');
    const [percentChange, setPercentChange] = useState<string>('0%');
    const [percentagePoints, setPercentagePoints] = useState<string>('0pp');
    const [xGrowth, setXGrowth] = useState<string>('0X');
    const [activeTab, setActiveTab] = useState<'percent' | 'points' | 'growth'>('percent');

    const calculateValues = React.useCallback(() => {
        const initial = parseFloat(initialValue);
        const final = parseFloat(finalValue);

        if (!isNaN(initial) && !isNaN(final) && initial !== 0) {
            // Calculate percent change
            const change = ((final - initial) / initial) * 100;
            setPercentChange(`${Math.round(change)}%`);

            // Calculate percentage points
            const points = final - initial;
            setPercentagePoints(`${Math.round(points)}pp`);

            // Calculate X growth
            const growth = final / initial;
            setXGrowth(`${Math.round(growth)}X`);
        } else {
            setPercentChange('0%');
            setPercentagePoints('0pp');
            setXGrowth('0X');
        }
    }, [initialValue, finalValue]);

    useEffect(() => {
        calculateValues();
    }, [calculateValues]);

    const explanations = {
        percent: {
            title: "Percent change is the relative change from an initial value to a final value.",
            example: "Marketers using AI tools changed from 20% to 40% year over year. So, marketers using AI tools grew 100% year over year.",
            formula: "((final value - initial value) / initial value) X 100%"
        },
        points: {
            title: "Percent difference compares the arithmetic difference between two percentages.",
            example: "Marketers using AI tools grew from 20% to 40% year over year. So, marketers using AI tools grew 20 percentage points year over year.",
            formula: "new value - old value"
        },
        growth: {
            title: "The number of times a value grows.",
            example: "Marketers using AI tools grew from 20% to 40% year over year. So, marketers using AI tools saw a 2X increase year over year. Or, marketers using AI tools doubled year over year.",
            formula: "new value / old value"
        }
    };

    return (
        <div className="calculator-container">
            <div className="banner">
                <div className="banner-content">
                    <span>WE'RE BUILDING A MARKET RESEARCH TOOL FOR MARKETERS</span>
                    <Link to="/" className="learn-more">LEARN MORE</Link>
                </div>
            </div>
            
            <h1>Percent Change Calculator</h1>
            
            <p className="description">
                This tool helps marketers calculate percent change, percentage points, and X growth
                — and learn how to describe data correctly in marketing content.
            </p>

            <div className="input-container">
                <div className="input-group">
                    <label>OLD VALUE (%)</label>
                    <input
                        type="number"
                        value={initialValue}
                        onChange={(e) => setInitialValue(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>NEW VALUE (%)</label>
                    <input
                        type="number"
                        value={finalValue}
                        onChange={(e) => setFinalValue(e.target.value)}
                    />
                </div>
            </div>

            <div className="results-container">
                <div 
                    className={`result-box ${activeTab === 'percent' ? 'active' : ''}`}
                    onClick={() => setActiveTab('percent')}
                >
                    <div className="result-label">
                        <span className="icon">↗</span>
                        PERCENT CHANGE
                    </div>
                    <div className="result-value">{percentChange}</div>
                </div>

                <div 
                    className={`result-box ${activeTab === 'points' ? 'active' : ''}`}
                    onClick={() => setActiveTab('points')}
                >
                    <div className="result-label">
                        <span className="icon">↗</span>
                        PERCENTAGE POINTS
                    </div>
                    <div className="result-value">{percentagePoints}</div>
                </div>

                <div 
                    className={`result-box ${activeTab === 'growth' ? 'active' : ''}`}
                    onClick={() => setActiveTab('growth')}
                >
                    <div className="result-label">
                        <span className="icon">↗</span>
                        <span className="growth-text">X GROWTH</span>
                    </div>
                    <div className="result-value">{xGrowth}</div>
                </div>
            </div>

            <div className="explanation">
                <h3>{explanations[activeTab].title}</h3>
                {activeTab !== 'growth' && (
                    <>
                        <div className="example">
                            <h4>EXAMPLE</h4>
                            <p>{explanations[activeTab].example}</p>
                        </div>
                        {explanations[activeTab].formula && (
                            <div className="formula">
                                <h4>FORMULA</h4>
                                {activeTab === 'percent' ? (
                                    <div className="formula-display">
                                        <div className="fraction">
                                            <div className="numerator">new value − old value</div>
                                            <div className="denominator">old value</div>
                                        </div>
                                        <span className="formula-text">× 100</span>
                                    </div>
                                ) : (
                                    <div className="formula-display">
                                        <span className="formula-text">new value − old value</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
                {activeTab === 'growth' && (
                    <>
                        <div className="example">
                            <h4>EXAMPLE</h4>
                            <p>{explanations.growth.example}</p>
                        </div>
                        <div className="formula">
                            <h4>FORMULA</h4>
                            <div className="formula-display">
                                <div className="fraction">
                                    <div className="numerator">new value</div>
                                    <div className="denominator">old value</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <footer>
                <p>Created by <a href="https://datalily.com">Datalily</a> – a women-owned content & research studio.</p>
                <a href="https://www.datalily.com">
                    <img src={logo} alt="Datalily Logo" className="footer-logo" />
                </a>
            </footer>
        </div>
    );
};

export default Calculator; 