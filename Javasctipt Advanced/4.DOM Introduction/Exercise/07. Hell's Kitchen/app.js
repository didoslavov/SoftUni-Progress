function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    const inputElement = document.querySelector('#inputs > textarea');
    const bestRestaurantElement = document.querySelector('#bestRestaurant p');
    const bestWorkersElement = document.querySelector('#workers p');

    function onClick() {
        const input = JSON.parse(inputElement.value);
        const restaurants = {};

        input.forEach((restaurant) => {
            const [name, workersInfo] = restaurant.split(' - ');

            workersInfo.split(', ').forEach((worker) => {
                const [workerName, salary] = worker.split(' ');

                if (!restaurants.hasOwnProperty(name)) {
                    restaurants[name] = {};
                }

                restaurants[name][workerName] = Number(salary);
            });
        });

        let totalSalary = 0;
        let bestAvgSalary = 0;
        let bestSalary = 0;
        let bestRestaurant = '';

        Object.entries(restaurants).forEach((restaurant) => {
            const [name, workers] = restaurant;
            const salaries = Object.values(workers);
            totalSalary = salaries.reduce((acc, salary) => acc + salary, 0);
            const avrgSalary = totalSalary / Object.keys(workers).length;

            if (avrgSalary > bestAvgSalary) {
                bestAvgSalary = avrgSalary;
                bestRestaurant = name;
                bestSalary = salaries.reduce((acc, salary) => {
                    if (acc < salary) acc = salary;
                    return acc;
                }, 0);
            }

            totalSalary = 0;
        });

        bestRestaurantElement.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(
            2
        )} Best Salary: ${bestSalary.toFixed(2)}`;

        const bestRestaurantWorkers = [];

        Object.entries(restaurants[bestRestaurant])
            .sort((a, b) => b[1] - a[1])
            .forEach((worker) => {
                bestRestaurantWorkers.push(`Name: ${worker[0]} With Salary: ${worker[1]}`);
            });

        bestWorkersElement.textContent = bestRestaurantWorkers.join(' ');
    }
}
