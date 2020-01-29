import Mail from '../../lib/Mail';

class ConfirmationMail {
  get key() {
    return 'ConfirmationMail';
  }

  async handle({ data }) {
    const { name, confirmed_adults, confirmed_kids } = data;

    await Mail.sendMail({
      to: `${name} <confirmados@claraeluizeduardo.com>`,
      subject: 'Convidados Confirmados',
      template: 'confirmation',
      context: {
        name,
        confirmed_adults,
        confirmed_kids
      }
    });
  }
}

export default new ConfirmationMail();
