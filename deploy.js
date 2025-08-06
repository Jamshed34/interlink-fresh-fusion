// deploy.js
import ghpages from 'gh-pages';

ghpages.publish('dist', {
  repo: 'https://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/Jamshed34/interlink-fresh-fusion.git',
  user: {
    name: 'Jamshed34',
    email: 'jamshedmustafa34@gmail.com',
  },
}, console.log);
