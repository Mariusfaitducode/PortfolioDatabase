const fs = require('fs');
const axios = require('axios');

const exportData = async () => {
  try {
    const projectsResponse = await axios.get('http://localhost:1337/projects');
    const skillsResponse = await axios.get('http://localhost:1337/skills');
    const imagesResponse = await axios.get('http://localhost:1337/images');

    fs.writeFileSync('./projects.json', JSON.stringify(projectsResponse.data, null, 2));
    fs.writeFileSync('./skills.json', JSON.stringify(skillsResponse.data, null, 2));
    fs.writeFileSync('./images.json', JSON.stringify(imagesResponse.data, null, 2));

    console.log('Data exported successfully');
  } catch (error) {
    console.error('Error exporting data', error);
  }
};

exportData();
