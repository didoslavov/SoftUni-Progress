class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error('This article model is not included in this gallery!');
        }

        const article = this.listOfArticles.find(
            (a) => a.articleModel === articleModel.toLowerCase() && a.articleName === articleName
        );

        if (!article) {
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity,
            });
        } else {
            article.quantity += Number(quantity);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        const guest = this.guests.find((g) => g.guestName === guestName);
        const pointsDict = {
            Vip: 500,
            Middle: 250,
        };

        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }

        this.guests.push({
            guestName,
            points: pointsDict[personality] ? pointsDict[personality] : 50,
            purchaseArticle: 0,
        });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        const article = this.listOfArticles.find(
            (a) => a.articleModel === articleModel.toLowerCase() && a.articleName === articleName
        );
        const guest = this.guests.find((g) => g.guestName === guestName);

        if (!article) {
            throw new Error('This article is not found.');
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        if (!guest) {
            return 'This guest is not invited.';
        }

        const articlePoint = Number(this.possibleArticles[articleModel]);

        if (articlePoint > guest.points) {
            return 'You need to more points to purchase the article.';
        }

        guest.points -= articlePoint;
        article.quantity -= 1;
        guest.purchaseArticle += 1;

        return `${guestName} successfully purchased the article worth ${articlePoint} points.`;
    }

    showGalleryInfo(criteria) {
        const articlesInformation = this.listOfArticles.map((a) => `${a.articleModel} - ${a.articleName} - ${a.quantity}`);
        const guestsInformation = this.guests.map((g) => `${g.guestName} - ${g.purchaseArticle}`);

        const criterias = {
            article: `Articles information:\n${articlesInformation.join('\n')}`,
            guest: `Guests information:\n${guestsInformation.join('\n')}`,
        };

        return criterias[criteria];
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
