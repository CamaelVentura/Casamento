import Guest from '../models/Guest';

class GuestController {
  async store(req, res) {
    const { name, expected_adults = 0, expected_kids = 0 } = req.body;

    const guest = await Guest.create({
      name,
      expected_adults,
      expected_kids
    });

    return res.json(guest);
  }

  async show(req, res) {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ error: 'Voce precisa digitar o nome que esta no convite' });
    }

    const { id, confirmed } = await Guest.findOne({
      where: {
        name
      }
    });

    if (confirmed) {
      return res.status(400).json({ error: 'Voce ja confirmou presenca' });
    }

    return res.json({
      name,
      id
    });
  }
}

export default new GuestController();
