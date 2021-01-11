## Execution
First of all, clone the repository to your machine and open the created folder
```bash
$ git clone https://github.com/ElmouradiAmine/cities-app-backend.git
$ cd cities-app-backend
```

```bash
$ docker-compose up -d
$ npm install
$ npm run start:dev
```



Open [http://localhost:5000/cities?search=Paris](http://localhost:5000/cities?search=Paris) to get a JSON response.

After you finish don't forget to free the ressources by:
```bash
$ docker-compose down -v
```
