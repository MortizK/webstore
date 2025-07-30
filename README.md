# Webstore

Why again? I already did something similar with [Orden der letzten Haltestelle](https://github.com/Orden-der-letzten-Haltestelle/WebEngineering) for a university project.

But I want to redo the Project with all the knowledge I gained during it and to get rid of most spaghetti code.

## What do I want to improve

I want to improve *Logging* and *Error Management*. With This as a starting point I hope, that the development journey will be smoother as inevitable bugs need to be fixed.

In the last Project our *Error Management* was spaghetti code and not central as a Middleware. This will be changed.

I also want to improve the responses from the backend and I think, I want to orient myself on an Idea from [OmniTI Labs](https://github.com/omniti-labs) with their [jsend](https://github.com/omniti-labs/jsend) model.

And in general, I want to the entire journey until deployment. And with a look into the future, I want to have my backend and frontend in *separate containers*. As in a later Day I want to rewrite the frontend in a Framework.

But in all this I should not forget **Automated Tests**. Those should give me comfort when I change something and for a decent deployment pipeline.

I will also try out another folder architecture, as I think the *feature* oriented approche would be simpler for this project size.

## The Project

To run the Project you will need to create some more Files. Those are:

- `./db/seed.sql` which can be empty
- `./db/db.env` which needs `POSTGRESS-USER=` and `POSTGRES_PASSWORD=`. Default is `postgres`
- `./backend/backend.env` which needs `PORT=3000`

Those are needed an the `.env` files will probably have more variables as the project grows. And some of those like *secrets* and *tokens* shouldn't be on a public repo.

### Run the Project

To run it, you need to have [Docker](https://www.docker.com/) installed and run the following command from the root folder of this repo `webstore`:

```shell
docker compose up
```

This will take a minute, but at the end. All containers will run using docker and you can visit the webstore in your Browser under http://localhost:3000.

### Develop

To Further Develop this webstore, you probably want to have a life demo. For this you need to run the following commands and have a running container of a postgres DB:

```shell
cd .\backend\
npm install
npm run dev
```

This will start the backend with nodedeamon which will update the webstore if you save a file of: Example `.js`.