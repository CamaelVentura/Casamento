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

    const guest = await Guest.findOne({
      where: {
        name
      }
    });

    if (guest === null) {
      return res
        .status(400)
        .json({ error: 'Voce precisa digitar o nome como esta no convite' });
    }

    const { id } = guest;

    return res.json({
      id
    });
  }

  async update(req, res) {
    const guest = await Guest.findByPk(req.params.id);

    const { expected_adults, expected_kids } = req.body;

    const { name } = await guest.update({
      expected_adults,
      expected_kids
    });

    return res.json(name);
  }
}

export default new GuestController();
