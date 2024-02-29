import { useAxios } from '../contexts/axiosContext';


export default function DataService() {

  const { publicAxios } = useAxios();

  function getAllMacroscenarios() {
    return new Promise((resolve, reject) => {
      publicAxios.get('/v1/macroscenarios')
        .then(res => {

          resolve(res.data.data);
        }).catch(err => {
          reject(err);
        });
    });
  }


  function getAllStartups() {
    return new Promise((resolve, reject) => {
      publicAxios.get('/v1/startups')
        .then(res => {

          resolve(res.data.data);
        }).catch(err => {
          reject(err);
        });
    });
  }

  function getChartData(filters) {
    return new Promise((resolve, reject) => {
      let url = `/v1/graph?fromDate=${filters.fromDate}&untilDate=${filters.untilDate}`;

      if (filters.macroscenario) {
        url += `&macroscenarioId=${filters.macroscenario}`;
        if (filters.scenarios && filters.scenarios.length > 0) url += `&escenarios=${filters.scenarios}`;
      }
      if (filters.moment) url += '&phase=' + filters.moment;
      if (filters.quota) url += '&voiceQuota=' + filters.quota / 100;
      
      console.log(url , 'la url que se le hace la petición ')

      publicAxios.get(url)
        .then(res => {
          resolve(res.data.data);
        }).catch(err => {
          reject(err);
        });
    });
  }

  return {
    getAllMacroscenarios,
    getChartData,
    getAllStartups
  }
}