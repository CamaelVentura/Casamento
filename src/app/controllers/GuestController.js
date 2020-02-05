import Guest from '../models/Guest';

export const store = async (req, res) => {
  const { name, expected_adults = 0, expected_kids = 0 } = req.body;

  const guest = await Guest.create({
    name: name.toLowerCase(),
    expected_adults,
    expected_kids
  });

  return res.json(guest);
};

export const show = async (req, res) => {
  const { name } = req.body;
  const newName = name.toLowerCase();

  if (!name) {
    return res
      .status(400)
      .json({ error: 'Voce precisa digitar o nome que esta no convite' });
  }

  const guest = await Guest.findOne({
    where: {
      name: newName
    }
  });

  if (guest === null) {
    return res
      .status(400)
      .json({ error: 'Voce precisa digitar o nome como esta no convite' });
  }

  const { id } = guest;

  return res.json({
    id,
    name
  });
};

export const update = async (req, res) => {
  const guest = await Guest.findByPk(req.params.id);

  const { expected_adults, expected_kids } = req.body;

  const { name } = await guest.update({
    expected_adults,
    expected_kids
  });

  return res.json(name);
};
