import fetch from 'isomorphic-fetch';

module.exports = {
  async getRequest(url) {
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.USER_AUTH}`,
      },
    });

    const res = await data.json();

    return res;
  },
};
