const projectList = () => {
    const projectList = [];

    for (let i = 0; i < 10; i++) {
      projectList.push({
        "image": "http://localhost:8081/src/assets/images/Demo.png",
        "name": "Макеты Демо " + i,
        "info": "DOT * Только что",
        "id": 85477580812 + i
      })
    }

    return projectList;
  }

  module.exports = { projectList };