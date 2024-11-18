import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class InvoiceItem extends React.Component {
  render() {
    const { items, currency, onItemizedItemEdit, onRowAdd, onRowDel } = this.props;

    return (
      <Table responsive className="table-borderless">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>
                <Form.Control
                  type="text"
                  name="name"
                  value={item.name}
                  id={item.id}
                  onChange={onItemizedItemEdit}
                  placeholder="Item name"
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="description"
                  value={item.description}
                  id={item.id}
                  onChange={onItemizedItemEdit}
                  placeholder="Item description"
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  id={item.id}
                  onChange={onItemizedItemEdit}
                  min="1"
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="price"
                  value={item.price}
                  id={item.id}
                  onChange={onItemizedItemEdit}
                  step="0.01"
                  min="0.00"
                />
              </td>
              <td>
                {currency}
                {parseFloat(item.price * item.quantity).toFixed(2)}
              </td>
              <td>
                <Button variant="danger" onClick={() => onRowDel(item)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="6">
              <Button variant="success" onClick={onRowAdd}>
                Add Item
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default InvoiceItem;
