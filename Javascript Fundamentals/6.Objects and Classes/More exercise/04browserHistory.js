function browserHistory(browserInfo, commands) {
  for (const line of commands) {
    if (line === 'Clear History and Cache') {
      clearHistoryAndCache(browserInfo);
      continue;
    }

    const [command, ...siteNames] = line.split(' ');
    const siteName = siteNames.join(' ');

    switch (command) {
      case 'Open':
        openTab(browserInfo, siteName, line);
        break;
      case 'Close':
        const isValid = browserInfo['Open Tabs'].includes(siteName);
        if (!isValid) {
          continue;
        }

        closeTab(browserInfo, siteName, line);
        break;
    }
  }
  console.log(browserInfo['Browser Name']);
  console.log(`Open Tabs: ${browserInfo['Open Tabs'].join(', ')}`);
  console.log(`Recently Closed: ${browserInfo['Recently Closed'].join(', ')}`);
  console.log(`Browser Logs: ${browserInfo['Browser Logs'].join(', ')}`);

  function clearHistoryAndCache(obj) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (key === 'Browser Name') {
        continue;
      }

      obj[key] = [];
    }
  }

  function openTab(browser, tabName, commandLine) {
    browser['Open Tabs'].push(tabName);
    browser['Browser Logs'].push(commandLine);
  }

  function closeTab(browser, tabName, commandLine) {
    const siteNameIndex = browser['Open Tabs'].indexOf(tabName);
    const closedTab = browser['Open Tabs'].splice(siteNameIndex, 1);
    browser['Recently Closed'].push(closedTab);
    browser['Browser Logs'].push(commandLine);
  }
}

browserHistory(
  {
    'Browser Name': 'Google Chrome',
    'Open Tabs': ['Facebook', 'YouTube', 'Google Translate'],
    'Recently Closed': ['Yahoo', 'Gmail'],
    'Browser Logs': [
      'Open YouTube',
      'Open Yahoo',
      'Open Google Translate',
      'Close Yahoo',
      'Open Gmail',
      'Close Gmail',
      'Open Facebook',
    ],
  },
  ['Close Facebook', 'Open StackOverFlow', 'Open Google']
);
console.log('------------------');
browserHistory(
  {
    'Browser Name': 'Mozilla Firefox',
    'Open Tabs': ['YouTube'],
    'Recently Closed': ['Gmail', 'Dropbox'],
    'Browser Logs': [
      'Open Gmail',
      'Close Gmail',
      'Open Dropbox',
      'Open YouTube',
      'Close Dropbox',
    ],
  },
  ['Open Wikipedia', 'Clear History and Cache', 'Open Twitter']
);
