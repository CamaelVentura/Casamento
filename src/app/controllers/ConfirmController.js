import Guest from '../models/Guest';

class GuestController {
  async update(req, res) {
    const guest = await Guest.findByPk(req.params.id);

    const { confirmed_adults = 0, confirmed_kids = 0 } = req.body;

    const { name } = await guest.update({
      confirmed_adults,
      confirmed_kids,
      confirmed: true
    });

    return res.json(name);
  }

  async index(req, res) {
    const guests = await Guest.findAll({
      where: {
        confirmed: true
      }
    });

    return res.json(guests);
  }
}

export default new GuestController();
