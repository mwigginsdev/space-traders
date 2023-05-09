
export default class ApiService {

    async registerAgent(agentName) {
        try {
            const response = await fetch('https://api.spacetraders.io/v2/register', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  symbol: agentName,
                  faction: 'COSMIC',
                }),
              });
            const json = await response.json();
            console.log(json);
            return json
        } catch(error) {
            console.log(error);
        }
    }
}