const {TvShow} = require('../models');


exports.getAllTvShows = async (req, res) => {
  const userId = req.userId;
  const limit = parseInt(req.query.limit) || 15;
  const offset = parseInt(req.query.offset) || 0;

  try {
    const shows = await TvShow.findAll({
      where: { userId },
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    res.json(shows);
  } catch (error) {
    console.error('Error fetching shows:', error);
    res.status(500).json({ error: 'Failed to fetch shows' });
  }
};


exports.createTvShow = async (req, res) => {
  const newShow = await TvShow.create({
    ...req.body,
    userId: req.userId,
  });
  res.status(201).json(newShow);
};

exports.updateTvShow = async (req, res) => {
  try {
    const { id } = req.params;

    const show = await TvShow.findOne({ where: { id, userId: req.userId } });

    if (!show) {
      return res.status(404).json({ error: 'TV Show not found or unauthorized' });
    }

    await show.update(req.body);

    res.status(200).json({
      message: 'TV Show updated successfully',
      data: show
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTvShow = async (req, res) => {
  try {
    const { id } = req.params;

    const show = await TvShow.findOne({ where: { id, userId: req.userId } });

    if (!show) {
      return res.status(404).json({ error: 'TV Show not found or unauthorized' });
    }

    await show.destroy();

    res.status(200).json({ message: 'TV Show deleted successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
