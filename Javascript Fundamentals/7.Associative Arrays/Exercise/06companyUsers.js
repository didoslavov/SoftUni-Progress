function companyUsers(input) {
  const companiesInfo = [...input];
  const companies = {};

  companiesInfo.forEach((currentCompany) => {
    const company = currentCompany.split(' -> ');
    const companyName = company[0];
    const id = company[1];

    if (!companies.hasOwnProperty(companyName)) {
      companies[companyName] = [id];
    } else {
      const currentID = id;
      companies[companyName].push(currentID);
    }

    companies[companyName] = [...new Set(companies[companyName])];
  });

  const sortedCompanies = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const company of sortedCompanies) {
    const name = company[0];
    const ids = company[1];
    console.log(name);
    ids.forEach(id => {
        console.log(`-- ${id}`);
    });
  }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );
