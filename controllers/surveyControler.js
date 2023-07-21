const getNames = (req, res) => {
    const names = ['Juan', 'María', 'Carlos'];
    res.json(names);
  };
  
  module.exports = {
    getNames
  };
  