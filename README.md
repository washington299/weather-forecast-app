# Weather forecast app

This is a Weather Forecast app where you can type the name of the city and see the weather on the next 5 days.

## Techs, libs and best practices used

- ReactJs
- Vite
- Typescript
- Chakra Ui
- React-query
- Recoil
- Convetional commits
- Absolute paths

### How to run

To run the project, first clone this repostory and move to the file on your machine. After that, install the dependencies by running this command:

```
yarn
```

After that you have to create an account on [Open api](https://openweathermap.org/), and create a private key to have access to api endpoints. After you have your key, create a ``.env.local`` file on the root of the project and paste this line:

``
VITE_OPEN_WEATHER_API_KEY=${API_KEY}
``

now replace the ``${API_KEY}`` with your private key from open api.

Then to open the project locally run:

```
yarn dev
```

Then it will appear a local url on your terminal, so you can go there and see the project working :).
