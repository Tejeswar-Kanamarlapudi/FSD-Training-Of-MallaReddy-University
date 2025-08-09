import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    price: '',
    info: ['', '', ''],
  });

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleChange = (field, value) => {
    if (field.startsWith('info')) {
      const index = parseInt(field.slice(4));
      const newInfo = [...formData.info];
      newInfo[index] = value;
      setFormData({ ...formData, info: newInfo });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleAddProduct = () => {
    const newProduct = {
      ...formData,
      id: Date.now(),
    };
    setProducts([...products, newProduct]);
    setFormData({ title: '', image: '', price: '', info: ['', '', ''] });
  };

  const handleEditClick = (id) => {
    const product = products.find((p) => p.id === id);
    setEditingId(id);
    setEditData({ ...product });
  };

  const handleEditChange = (field, value) => {
    if (field.startsWith('info')) {
      const index = parseInt(field.slice(4));
      const newInfo = [...editData.info];
      newInfo[index] = value;
      setEditData({ ...editData, info: newInfo });
    } else {
      setEditData({ ...editData, [field]: value });
    }
  };

  const handleSave = () => {
    const updated = products.map((p) => (p.id === editingId ? editData : p));
    setProducts(updated);
    setEditingId(null);
  };

  return (
    <div className="App">
      <h1>Product Card Creator</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => handleChange('image', e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => handleChange('price', e.target.value)}
        />
        {[0, 1, 2].map((i) => (
          <input
            key={i}
            type="text"
            placeholder={`Info line ${i + 1}`}
            value={formData.info[i]}
            onChange={(e) => handleChange(`info${i}`, e.target.value)}
          />
        ))}
        <button onClick={handleAddProduct}>Generate Card</button>
      </div>

      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            {editingId === product.id ? (
              <>
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) => handleEditChange('title', e.target.value)}
                />
                <input
                  type="text"
                  value={editData.image}
                  onChange={(e) => handleEditChange('image', e.target.value)}
                />
                <input
                  type="text"
                  value={editData.price}
                  onChange={(e) => handleEditChange('price', e.target.value)}
                />
                {editData.info.map((line, i) => (
                  <input
                    key={i}
                    type="text"
                    value={line}
                    onChange={(e) =>
                      handleEditChange(`info${i}`, e.target.value)
                    }
                  />
                ))}
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <p>{product.price}</p>
                {product.info.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <button onClick={() => handleEditClick(product.id)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
