let args = process.argv.slice(2);
let keyValues = args.map(a => a.split('='));
keyValues.forEach(kvp => kvp[0] = kvp[0].replace('--', ''));

const params = {};

keyValues.forEach(kvp => params[kvp[0]] = kvp[1]);

if (params.token) {
    const token = params.token;
    const tokenSplit = token.split('.').map(atob);
    const parsedTokenComponents = tokenSplit.slice(0, 2);

    console.log('Token can be found below');
    console.log('====================================');
    console.log('');
    console.log(parsedTokenComponents);

} else {
    console.error('arg --token was not present or had no value!');
    process.exit(1);
}

function atob(s) {
    try {
        return new Buffer.from(s, 'base64').toString('binary');
    } catch (e) {
        return s;
    }
}
