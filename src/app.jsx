import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'amountDue') {
      this.setState({ amountDue: Number(e.target.value) });
    } else if (e.target.name === 'amountReceived') {
      this.setState({ amountReceived: Number(e.target.value) });
    }
  }

  calculate(amountDue, amountReceived) {
    const changeDue = amountReceived - amountDue;
    this.setState({ changeDue: changeDue });
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

              {this.state.changeDue ? this.state.changeDue > 0 ? (<div className="alert alert-success text-center"> The total change due is: ${this.state.changeDue}</div>) : (<div className="alert alert-danger text-center"> Additional money owed </div>) : ''}

              <div className="row" style={{ paddingBottom: '20px' }}>
                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title">Twenties</h5>
                      <p>0</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title">Tens</h5>
                      <p>0</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title">Fives</h5>
                      <p>0</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title">Ones</h5>
                      <p>0</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title">Quarters</h5>
                      <p>0</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title">Dimes</h5>
                      <p>0</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title">Nickels</h5>
                      <p>0</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="card-body">
                      <h5 className="card-title">Pennies</h5>
                      <p>0</p>
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
