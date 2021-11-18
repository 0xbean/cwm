import fetch from 'isomorphic-fetch';

module.exports = {
  async getRequest(url) {
    console.log(url);
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const res = await data.json();

    return res;
  },
};
