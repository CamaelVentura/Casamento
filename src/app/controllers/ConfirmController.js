import Queue from '../../lib/Queue';

import ConfirmationMail from '../jobs/ConfirmationMail';
import ReconfirmationMail from '../jobs/ReconfirmationMail';

import Guest from '../models/Guest';

class GuestController {
  async update(req, res) {
    const guest = await Guest.findByPk(req.params.id);

    const { confirmed_adults = 0, confirmed_kids = 0 } = req.body;
    const { confirmed } = guest;

    const { name } = await guest.update({
      confirmed_adults,
      confirmed_kids,
      confirmed: true
    });

    if (!confirmed) {
      await Queue.add(ConfirmationMail.key, {
        name,
        confirmed_adults,
        confirmed_kids
      });
    } else {
      await Queue.add(ReconfirmationMail.key, {
        name,
        confirmed_adults,
        confirmed_kids
      });
    }

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
