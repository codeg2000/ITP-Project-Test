import React, { Component } from 'react';



class Supermarket extends Component {
    render() {
        return (
            <body>
                <div className="Scontainer">
                    <a href="/stocks">
                    <button className="sbtn btn1">Stock Management</button>
                    </a>

                    <a href="/emp">
                    <button className="sbtn btn2">Employee Management</button>
                    </a>

                    <a href="/item">
                    <button className="sbtn btn3">Item Management</button>
                    </a>
                    
                    <button className="sbtn btn4">Sales Management</button>
                </div>

                <div className="container2">
                    <button className="sbtn btn5">Payroll Management</button>
                    <a href="/return">
                    <button className="sbtn btn6">Return Management</button>
                    </a>
                    <button className="sbtn btn7">Membership Management</button>
                    <button className="sbtn btn8">User Management</button>
                </div>
            </body>
        );
    }
}

export default Supermarket;
