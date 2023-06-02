const {Favorite} = require ('../DB_connection');

const postFav = async (req, res) => {
    const { name, origin, status, image, species, gender } = req.body;
  
    if (!name || !origin || !status || !image || !species || !gender) {
      res.status(401).send('Faltan datos');
      return;
    }
  
    try {
      await Favorite.findOrCreate({
        where: {
          name,
          origin,
          status,
          image,
          species,
          gender
        }
      });
  
      const favorites = await Favorite.findAll();
      res.status(200).json(favorites);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};