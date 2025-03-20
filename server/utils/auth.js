const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Y̸̨̛̭̰̼̤͖͖̜͈̟̹̝̹͑͂̏͋͛̀̉̽̃͜ͅo̴̦͍̻̜̳͐̐͊͂̓͐́̓̓̊͊̽̚͘͜͠ú̸̹̣̩̭̫̲̫̜͐̿̈́̏̈ ̵͙͍̣̠̪̰̻̯̞̔̽ͅͅT̸̛͍̭̞̊͐̆̓̿̋̓́̽̇̏͜ǒ̶͉̫̹̮̗̝̀͆̍͌̈́̓̄̍̀̄̕͝k̶̳͙̙̝̀͂̓̂͊͊̂̀͂̀̏̈́̕̕͝͝e̶̢̙̼͇͓̯̦̺͚͎̦̱̽̿̚n̴̺͕̬̜̲̱̫̗̺̯͖͍͓̭̳̹̪̐͆ ̷̛̦̤̗̻͐̈́̈́́͆͆̚͝H̵̨̖̤̿̋̾̌̎͗̌̎́̚a̴̾̉͗̽̍̓͘ͅͅş̴̦̯͔̹͙͉̹̱̼̉͑͗̈̋̌̏͘͝ ̸̭̘̮̝͉͗́B̵̥͔̂̀̊̈̎̅̈͊̿́̀͋̋̒ê̸̢̢̼̪̙͓͈̹̥̺̺̜̟̩͈̈́̽̆̚ę̶̛̟͚̱̹̩̳̹̳̘̼͇̞̦͉͌͆̎͐̈́̎͐̓̉͒̓́̚͝n̶͗̓͛͂ͅ ̶̹͍̣̟͆̔̽̂̈́͗͋̇͑̕E̷̟̰̺̣̹͓̖̫̦͙̝̣̻͘a̴̡̢͎͖͚̬͓͔̳̪̥͓͎̩͑͊͌̈́̾̄͋̓̓̔t̶̹̞̙̱̖̖̖̲̪̺̣̆͐̍͐́̋̋͘͝ę̵̱͓̖̲̲̘͚̥͈̹̹̭̓͛̕n̶͍͉͇͖̥̊̿͌̈̈́̽̆͑̉̅͜ ̸̛̩̬̄̇̃͋̅̂̌̄͘͘͠͝B̶̨̟̫͕̜̮̻͍̪̳̮͚͒͂͌̂̂̿͑̎͌͊͝͝ý̷̧̛̦̟̟͈̞̣̎͌̿̓̈́͆̏͂̀̇͌͒ͅ ̸̛̛͚̟̜̩̻̩̖̄̿͐͒̑̅̉͗̾̒̽͊͂́ͅZ̴̡̜̳̹͍̥̳͇̭̮̹̿̐̚o̶̞̎ȓ̴̨̤͍̰̒̉͛͗̑̈́̓͆͒̄͛̕͜͜g̶̰̱̬̹͇̥̻̪̳̬̜̊͜ͅr̵̒̀̒̂͒̐̽̎̃̂͑͒͜͝ã̵̢̨̙̟̹̥̬̟̟̮̫̭̰̥͜t̴͍̩̹̹͔͑́̎̀̂̀̓̔̚̚ ̸̭̱̲̩̋͑̓̏̕͝T̸̢̛͙̣̘̝͚̩̗̹̞̈́̾͗̊͐̓̈́̆̿̿́͂̊̈́͠ḩ̶̛̳̠̟̯̥̣̘̱̠̲̙̬̞͙̱̱̔͑̃̔̇̓̎͌̀e̴̯̲̞͖̥͈̹̳͈̪͕̣̝̞̍̆̀̏͘͠ ̸̠͇̮̦̟̮͓͈̑̾̍̄͆̽͋̉S̵̛̛͍̤̰̣̱̯̑̒̈́̽͆̅̽̿͗̐͑̐͝͠ļ̵̗͔̼̥̮̘̞̲̳̅̀̚a̷͈͈̣̭͖̲̮̠͊̊͜y̴̛̩̩͇̜̎̓̿͊̌̒̎̍̈̂͑̋͘͠͠e̷̢̜̙̱̬̟͔̯͆̔́̂̅͌͂́̽̈̚̚r̴̯̩̼͉̱͖̦̬̻̎̊̈̃̕͜');
    }

    return req;
  },
  signToken: function ({ fullName, admin, email, _id }) {
    const payload = { fullName, admin, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
