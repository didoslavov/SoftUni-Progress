let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']


function solution(command) {
    if (command === 'upvote') return this.upvotes++;
    if (command === 'downvote') return this.downvotes++;

    let upvotes = this.upvotes;
    let downvotes = this.downvotes;
    let totalVotes = upvotes + downvotes;
    let score = upvotes - downvotes;

    if (totalVotes > 50) {
        let obfuscatedVotes = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
        return [upvotes + obfuscatedVotes, downvotes + obfuscatedVotes, score, ratings()];
    }

    return [upvotes, downvotes, score, ratings()];

    function ratings() {
        if (totalVotes < 10) return 'new';
        if (upvotes > totalVotes * 0.66) return 'hot';
        if (score >= 0 && totalVotes > 100) return 'controversial';
        if (score < 0) return 'unpopular';
        return 'new';
    }
}

