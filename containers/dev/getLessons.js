const fs = require('fs');
const path = require('path');
const pathTools = require(path.join(__dirname, 'pathTools.js'));

function entryPoints(buildMode) {
  const points = {
    main: ['whatwg-fetch', '@babel/polyfill', './src/js/main.js'],
    input: './src/js/views/input/input',
  };

  const lessons = pathTools.getAllPaths(
    './src/Lessons',
    ['lesson.js', 'quickReference.js'],
    ['lesson-dev.js'],
    buildMode,
  );
  lessons.forEach((lesson) => {
    const p = lesson.path.replace(/src\/Lessons\//, '');
    const name = lesson.name.slice(0, -3);
    points[`Lessons/${p}/${name}`] = `./${lesson.path}/${lesson.name}`;
  });
  return points;
}


// This method goes through all the details and versions files and updates
// them with current lesson, topic, version
function updateDetailsAndVersions() {
  // eslint-disable-next-line no-console
  console.log('Updating details and versions...');
  const lessons = pathTools.getAllLessons('./src/Lessons');
  lessons.forEach((lessonPath) => {
    const detailsPath = `./${lessonPath}/details.js`;
    if (fs.existsSync(detailsPath)) {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const details = require(detailsPath);
      let outStr = '// @flow';
      outStr = `${outStr}\n`;
      outStr = `${outStr}\n// eslint-disable-next-line no-var`;
      outStr = `${outStr}\nvar details = {`;
      outStr = `${outStr}\n  title: '${details.details.title}',`;
      outStr = `${outStr}\n  dependencies: [`;
      if (details.details.dependencies.length > 0) {
        details.details.dependencies.forEach((dependency) => {
          outStr = `${outStr}\n    '${dependency}',`;
        });
      }
      outStr = `${outStr}\n  ],`;
      outStr = `${outStr}\n  enabled: ${details.details.enabled || 'false'},`;
      outStr = `${outStr}\n  uid: '${lessonPath.split('/').slice(-1)[0]}',`;
      outStr = `${outStr}\n};`;
      outStr = `${outStr}\n`;
      outStr = `${outStr}\nmodule.exports = {`;
      outStr = `${outStr}\n  details,`;
      outStr = `${outStr}\n};`;
      outStr = `${outStr}\n`;
      fs.writeFileSync(detailsPath, outStr, (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      });
    }
  });

  const versions = pathTools.getAllVersions('./src/Lessons');
  versions.forEach((versionPath) => {
    const versionFile = `./${versionPath}/version.js`;
    const topic = versionPath.split('/').slice(-2, -1)[0];
    const versionUID = versionPath.split('/').slice(-1)[0];
    if (fs.existsSync(versionFile)) {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const version = require(versionFile);
      let outStr = '// @flow';
      outStr = `${outStr}\n`;
      outStr = `${outStr}\n// eslint-disable-next-line no-var`;
      outStr = `${outStr}\nvar details = {`;
      outStr = `${outStr}\n  uid: '${versionUID}',`;
      outStr = `${outStr}\n  topic: '${topic}',`;
      if (topic === 'quickReference') {
        outStr = `${outStr}\n  type: '${version.details.type || 'generic'}',`;
        outStr = `${outStr}\n  references: [`;
        if (version.details.references.length > 0) {
          version.details.references.forEach((reference) => {
            outStr = `${outStr}\n    '${reference}',`;
          });
        }
        outStr = `${outStr}\n  ],`;
      } else if (topic === 'links') {
        outStr = `${outStr}\n  type: '${version.details.type || 'generic'}',`;
        outStr = `${outStr}\n  links: [`;
        if (version.details.links.length > 0) {
          version.details.links.forEach((link) => {
            outStr = `${outStr}\n    {`;
            if (link.url != null) {
              outStr = `${outStr}\n      url: '${link.url}',`;
            }
            if (link.publisher != null) {
              outStr = `${outStr}\n      publisher: '${link.publisher}',`;
            }
            if (link.author != null) {
              outStr = `${outStr}\n      author: '${link.author}',`;
            }
            if (link.type != null) {
              outStr = `${outStr}\n      type: '${link.type}',`;
            }
            outStr = `${outStr}\n    },`;
          });
        }
        outStr = `${outStr}\n  ],`;
      } else {
        outStr = `${outStr}\n  title: '${version.details.title || ''}',`;
        outStr = `${outStr}\n  description: '${version.details.description || ''}',`;
        outStr = `${outStr}\n  fullLesson: ${version.details.fullLesson || 'false'},`;
        outStr = `${outStr}\n  type: '${version.details.type || 'generic'}',`;
      }
      outStr = `${outStr}\n};`;
      outStr = `${outStr}\n`;
      outStr = `${outStr}\nmodule.exports = {`;
      outStr = `${outStr}\n  details,`;
      outStr = `${outStr}\n};`;
      outStr = `${outStr}\n`;
      fs.writeFileSync(versionFile, outStr, (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      });
    }
  });
}

module.exports = {
  entryPoints, updateDetailsAndVersions, // makeLessonIndex, getAllLessons, updateDetailsAndVersions,
};
