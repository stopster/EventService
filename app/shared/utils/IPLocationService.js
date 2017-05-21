const https = require('https');

let instance;

class IPLocationService {
  constructor(){
    if(!instance){
      instance = this;
    }

    this._cache = {
      '0.0.0.0': {
        country: '',
        country_name: 'DOOM!'
      },
      '127.0.0.1': {
        country: '',
        country_name: 'Home Land'
      }
    }

    return instance;
  }

  getCountryCode(ipAddress){
    return this._getIPLocation(ipAddress).then((data) => {
      return data.country;
    });
  }

  getCountryName(ipAddress){
    return this._getIPLocation(ipAddress).then((data) => {
      return data.country_name;
    });
  }

  _getIPLocation(ipAddress){
    const that = this;


    let options = {
      host: 'ipapi.co', // google DNS
      path: `/${ipAddress}/json`
    };

    return new Promise((resolve, reject) => {
      let output = '';

      // Check cache
      if(that._cache[ipAddress]) {
        resolve(that._cache[ipAddress]);
        return;
      }

      // Make actual call to API
      https.get(options, (res) => {
        res.on('data', (chunk) => {
          output += chunk;
        });

        res.on('end', () => {
          output = that._parseLocationData(output);
          that._cache[ipAddress] = output;
          resolve(output);
        });
      });
    });
  }

  _parseLocationData(dataString){
    let data;
    try{
      data = JSON.parse(dataString);
    } catch (e){
      console.log('no json support');
      data = '';
    }
    return data;
  }
}

module.exports = IPLocationService;
