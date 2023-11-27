import './App.css';
import React from 'react'
import Table from 'react-bootstrap/Table';
function ResponsiveBreakpointsExample() {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>A</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Raul Singh</td>
            <td>raul@gmail.com</td>
            <td>412911</td>
            <td>India</td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Paul Singh</td>
            <td>paul@gmail.com</td>
            <td>4178911</td>
            <td>India</td>
            
          </tr>
          <tr>
            <td>3</td>
            <td>Kaul Singh</td>
            <td>kaul@gmail.com</td>
            <td>742911</td>
            <td>India</td>
            
          </tr>
        </tbody>
      </Table>
      <Table responsive="md">
        <thead>
          <tr>
            <th>B</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
          
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Son Singh</td>
            <td>son@gmail.com</td>
            <td>7522911</td>
            <td>USA</td>
          
          </tr>
          <tr>
            <td>2</td>
            <td>Mon Singh</td>
            <td>mon@gmail.com</td>
            <td>7845211</td>
            <td>USA</td>
           
          </tr>
          <tr>
            <td>3</td>
            <td>Tom Singh</td>
            <td>tom@gmail.com</td>
            <td>324578</td>
            <td>USA</td>
          
          </tr>
        </tbody>
      </Table>
      
      
    </div>
  );
}

export default ResponsiveBreakpointsExample;