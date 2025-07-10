import express from 'express';

const app = express();

// In-memory data store
let items = [
  {
    id: 1,
    name: 'Book',
    description: 'A mystery novel'
  },
  {
    id: 2,
    name: 'Pen',
    description: 'A blue ink pen'
  }
];

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemId = items.find(item => item.id === id);

  if (!itemId) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(itemId);
});

// Create a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name,
    description
  };

  items.push(newItem);

  res.status(201).json({
    data: newItem,
    message: 'New item created successfully'
  });
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;

  const itemIndex = items.findIndex(i => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  items[itemIndex] = { id, name, description };

  res.json({
    data: items[itemIndex],
    message: 'Item updated successfully'
  });
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(itemIndex, 1);

  res.json({
    data: deletedItem[0],
    message: 'Item deleted successfully'
  });
});

// 404 Error handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
