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
                    <a href="/sales/saleslist">
                    <button className="sbtn btn4">Sales Management</button>
                    </a>
                    
                </div>

                <div className="container2">
                    <a href="/payment">
                    <button className="sbtn btn5">Payroll Management</button>
                    </a>
                    <a href="/return">
                    <button className="sbtn btn6">Return Management</button>
                    </a>
                    <a href="/member">
                    <button className="sbtn btn7">Membership Management</button>
                    </a>
                    <a href="/department/">
                    <button className="sbtn btn8">User Management</button>
                    </a>
                </div>
            </body>
        );
    }
}

export default Supermarket;
