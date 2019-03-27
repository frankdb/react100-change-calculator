import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: null,
      twenties: null,
      tens: null,
      fives: null,
      ones: null,
      quarters: null,
      dimes: null,
      nickels: null,
      pennies: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'amountDue') {
      this.setState({ amountDue: e.target.value });
    } else if (e.target.name === 'amountReceived') {
      this.setState({ amountReceived: e.target.value });
    }
  }

  calculate(amountDue, amountReceived) {
    let changeDue = amountReceived - amountDue;
    this.setState({ changeDue: changeDue.toFixed(2) });

    if (changeDue < 0) {
      return;
    }

    const coinTypes = ["twenties", "tens", "fives", "ones", "quarters", "dimes", "nickels", "pennies"];
    const coinValues = [20, 10, 5, 1, .25, .1, .05, .01];

    var amount;

    for (var i = 0; i < coinValues.length; i++) {
      amount = Math.floor((changeDue) / coinValues[i]);
      if (amount > 0) {
        let coin = coinTypes[i];
        this.setState({ [coin]: amount })
        changeDue = changeDue % coinValues[i];
      } else {
        let coin = coinTypes[i];
        this.setState({ [coin]: amount })
      }
    }
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Change Calculator</h1>
        </header>

        <div id="tagline">
          <p></p>
        </div>

        <div className="row">

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Enter Information</h5>

                <div className="form-group">
                  <label htmlFor="amountDue">How much is due?</label>
                  <input name="amountDue" type="number" className="form-control" value={this.state.amountDue} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="amountReceived">How much was received?</label>
                  <input name="amountReceived" type="number" className="form-control" value={this.state.amountReceived} onChange={this.handleChange} />
                </div>

                <button className="btn btn-primary btn-block" disabled={!this.state.amountDue || !this.state.amountReceived} onClick={() => this.calculate(this.state.amountDue, this.state.amountReceived)}>Calculate</button>
              </div>
            </div>
          </div>

          <div className="col-md-8">

            <div className="card" style={{ padding: '20px' }}>

              {this.state.changeDue ? this.state.changeDue > 0 ? (<div className="alert alert-success text-center"> The total change due is ${this.state.changeDue}</div>) : (<div className="alert alert-danger text-center"> Additional money owed </div>) : ''}

              <div className="row" style={{ paddingBottom: '20px' }}>
                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Twenties</h5>
                      <p className="text-center change">{this.state.twenties}</p>
                    </div>
                  </div>
                </div>

                <div classNameName="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Tens</h5>
                      <p className="text-center change">{this.state.tens}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Fives</h5>
                      <p className="text-center change">{this.state.fives}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Ones</h5>
                      <p className="text-center change">{this.state.ones}</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Quarters</h5>
                      <p className="text-center change">{this.state.quarters}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Dimes</h5>
                      <p className="text-center change">{this.state.dimes}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Nickels</h5>
                      <p className="text-center change">{this.state.nickels}</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title text-center">Pennies</h5>
                      <p className="text-center change">{this.state.pennies}</p>
                    </div>
                  </div>
                </div>

              </div>


            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default App;
