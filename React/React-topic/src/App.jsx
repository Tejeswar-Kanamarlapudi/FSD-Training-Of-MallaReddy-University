import React, { useState } from 'react';
import { Edit2, Plus, X, Check, Image, DollarSign, Package, FileText } from 'lucide-react';
// import './experiment.css'

const ProductCardGenerator = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    info: ''
  });

  const resetForm = () => {
    setFormData({ name: '', image: '', price: '', info: '' });
    setShowForm(false);
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.price.trim()) {
      alert('Please fill in required fields (Name and Price)');
      return;
    }

    if (editingId) {
      setProducts(products.map(product =>
        product.id === editingId
          ? { ...formData, id: editingId, price: parseFloat(formData.price) || 0 }
          : product
      ));
    } else {
      const newProduct = {
        id: Date.now(),
        ...formData,
        price: parseFloat(formData.price) || 0
      };
      setProducts([...products, newProduct]);
    }

    resetForm();
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      image: product.image,
      price: product.price.toString(),
      info: product.info
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className='body'>
      <h1 className='heading'>Product Card Generator</h1>
      <p className='sub-heading'>Create and manage beautiful product cards</p>

      <button className='btn' onClick={() => setShowForm(true)}>
        <Plus size={20} /> Add New Product
      </button>

      {showForm && (
        <div className='modal' onClick={(e) => e.target === e.currentTarget && resetForm()}>
          <div className='modal-content'>
            <h2>{editingId ? 'Edit Product' : 'Add New Product'}</h2>
            <button className='close' onClick={resetForm}><X size={20} /></button>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Product Name *"
              required
            />

            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Image URL (optional)"
            />

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price *"
              step="0.01"
              min="0"
              required
            />

            <textarea
              name="info"
              value={formData.info}
              onChange={handleInputChange}
              placeholder="Product Description (optional)"
              rows="3"
            />

            <button onClick={resetForm}>Cancel</button>
            <button onClick={handleSubmit}>
              <Check size={18} /> {editingId ? 'Update Product' : 'Create Product'}
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="card-image-container">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className={`image-placeholder ${!product.image ? 'visible' : ''}`}>
                  <Image size={48} />
                </div>
                
                <div className="card-actions">
                  <button
                    onClick={() => handleEdit(product)}
                    className="action-btn edit-btn"
                    title="Edit Product"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="action-btn delete-btn"
                    title="Delete Product"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="card-content">
                <h3 className="product-name" title={product.name}>
                  {product.name}
                </h3>
                
                <div className="price-container">
                  <span className="price-symbol">$</span>
                  <span className="price-value">{product.price.toFixed(2)}</span>
                </div>

                {product.info && (
                  <p className="product-description" title={product.info}>
                    {product.info}
                  </p>
                )}

                <div className="card-footer">
                  <button className="add-to-cart-btn">
                    <span>Add to Cart</span>
                    <div className="btn-shine"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">
              <Package size={80} />
            </div>
            <h3 className="empty-title">No products yet</h3>
            <p className="empty-description">
              Click "Add New Product" to create your first product card and start building your catalog
            </p>
          </div>
        )}
      </div>

    
  );
};

export default ProductCardGenerator;
