class DummyCrypto(){
  constructor(){
    this.hash = '';
  }

  update(string){
    this.hash += string;
  }

  digest(){
    // add dots and replace some chars
    return '...' + this.hash.replace(/[a]/i, '@')
                    .replace(/[o]/i, '0')
                    .replace(/[i]/i, '1')
                    .replace(/[n]/i, '#') + '...';
  }
}

modue.exports = DummyCrypto;
