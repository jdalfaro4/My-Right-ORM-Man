const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products'
        }
      ]
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: 'products'
        }
      ]
    });
    if (!tag) {
      res.status(404);
    } else {
      res.json(tag);
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});


router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404);
    } else {
      await tag.update(req.body);
      res.json(tag);
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404);
    } else {
      await tag.update(req.body);
      res.json(tag);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json;
  }
});


module.exports = router;