# events-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### REST API db json
- toate evenimentele: GET /events
- eveniment dupa id: GET /events/<id> (/events/12)
- creare evenimnete: POST /events (body: json cu evenimnetul)
- update eveniment: PUT /events/<id> (body: json cu evenimnetul)
- delete eveniment: DELETE /events/<id>