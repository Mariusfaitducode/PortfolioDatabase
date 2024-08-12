const fs = require('fs');
const axios = require('axios');

const exportData = async () => {
  try {
    // const projectsResponse = await axios.get('http://localhost:1337/api/projects?populate=*');
    // const skillsResponse = await axios.get('http://localhost:1337/api/skills?populate=*');

    const apiUrl = 'http://localhost:1337/api';

    const params = {
      populate: '*',
      pagination: {
        page: 1,
        pageSize: 100 // Assurez-vous de définir une taille de page suffisamment grande pour inclure toutes les données
      },
    };

    const paramsProject = {
      populate: '*',
      pagination: {
        page: 1,
        pageSize: 100 // Assurez-vous de définir une taille de page suffisamment grande pour inclure toutes les données
      },
      sort: 'rank:asc'
    };

    const projectsResponse = await axios.get(`${apiUrl}/projects`, {  params: paramsProject });
    const skillsResponse = await axios.get(`${apiUrl}/skills`, { params });
    const timelineResponse = await axios.get(`${apiUrl}/timelines`, { params });

    fs.writeFileSync('./data/projects.json', JSON.stringify(projectsResponse.data, null, 2));
    fs.writeFileSync('./data/skills.json', JSON.stringify(skillsResponse.data, null, 2));
    fs.writeFileSync('./data/timelines.json', JSON.stringify(timelineResponse.data, null, 2));

    console.log('Data exported successfully');
  } catch (error) {
    console.error('Error exporting data', error);
  }
};

exportData();
