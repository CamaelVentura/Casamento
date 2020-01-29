import Mail from '../../lib/Mail';

class ReconfirmationMail {
  get key() {
    return 'ReconfirmationMail';
  }

  async handle({ data }) {
    const { name, confirmed_adults, confirmed_kids } = data;

    await Mail.sendMail({
      to: `${name} <confirmados@claraeluizeduardo.com>`,
      subject: 'Reconfirmacao de Convidados',
      template: 'reconfirmation',
      context: {
        name,
        confirmed_adults,
        confirmed_kids
      }
    });
  }
}

export default new ReconfirmationMail();
