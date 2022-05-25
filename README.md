<p align="center">
  <img width="150" src="https://user-images.githubusercontent.com/21250477/169414853-2f142e4e-414d-4aa7-be75-c67660585f0d.png"/>
</p>

<p align="center">
 <img width="800" src="https://user-images.githubusercontent.com/21250477/169414676-2e20cd55-1798-4210-8c25-549a28c79d15.png"/>
</p>

## About the project
This is a fun project I built for a job interview. It was my first time using [TailwindCSS](https://tailwindcss.com/) and [Next.js](https://nextjs.org/) so I think some performance updates will be implemented soon.

The idea of the project was to create an application that would return a list of characters from the Star Wars franchise and their respective planets. 

> *Note:* I tried to make this project as responsive (desktop and mobile) and minimally accessible (keyboard navigation, descriptive images) and we should always take these features as a priority in the next updates.

You can access the deployed version of the application [Here](https://star-wars-wiki.vercel.app).

<br clear="right">

## How it works
To get the characters and planets data, I used the [Star Wars API (SWAPI)](https://swapi.dev/). This API doesn't provide photos and bios of characters/planets, so I made a web scraper to collect this information from [Wookieepedia | Fandom](https://starwars.fandom.com/wiki/Main_Page) and integrated with the SWAPI results.

When accessing the application, the user receives a list of all characters returned by SWAPI. The characters from this list can be filter by name or one of their characteristics (birth year, mass and height) and these filters can be sorted ascending and descending.

Once a character card is clicked, a popup is showin with his information and home planet. By clicking on the home planet icon, the card is updated receiving the data of this planet, with its respective residents.

## Usage
```bash
# Clone this repository
git clone https://github.com/guizioliveira/star-wars-wiki.git

# Install all dependences
yarn

# Run the application
yarn dev
```

## Coming soon
* Even with the nextjs cache, the page update is slow. To solve this, we may need to adjust the scraper to only get the meta data of each character in Wookieepedia and not the entire HTML of each one of them;
* Create a separate component for the planets popover, to decrease the complexity of the `CharacterDetails` component;
* **Dark side mode!** I think it's a fun and interesting idea to create an "evil" theme :sweat_smile:;
