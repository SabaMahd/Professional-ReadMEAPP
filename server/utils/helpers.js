function technologies(userData) {
  if (userData.technologies.length < 1) {
    return ``;
  } else {
    return `\n\n## Built With ${userData.technologies.map(
      (technology) => `\n* ${technology}`
    )}`;
  }
}

function installation(userData) {
  if (userData.installation) {
    return `\n\n## Installation \n${userData.installation}`;
  } else {
    return ``;
  }
}

function usage(userData) {
  if (userData.usage) {
    return `\n\n## Usage \n${userData.usage}`;
  } else {
    return ``;
  }
}

module.exports = { technologies, installation, usage };
