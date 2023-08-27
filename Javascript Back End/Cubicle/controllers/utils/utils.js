function getSelectedOption(difficultyLevel) {
    const levels = {
        1: '<option value="1">1 - Very Easy</option>',
        2: '<option value="2">2 - Easy</option>',
        3: '<option value="3">3 - Medium (Standard 3x3)</option>',
        4: '<option value="4">4 - Intermediate</option>',
        5: '<option value="5">5 - Expert</option>',
        6: '<option value="6">6 - Hardcore</option>',
    };

    levels[difficultyLevel] = levels[difficultyLevel].replace(`value="${difficultyLevel}"`, `value=${difficultyLevel} selected`);

    return Object.values(levels);
}

module.exports = {
    getSelectedOption,
};
