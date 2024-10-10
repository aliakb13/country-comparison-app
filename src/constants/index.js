const key = import.meta.env.VITE_API_NYT_KEY;

const constUrl = {
  countries:
    "https://restcountries.com/v3.1/independent?status=true&fields=name,cca2,capital,region,languages,area,population,continents,flags,coatOfArms,idd",
  nyt: {
    prefix: "https://nytimes.com/",
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=peace&api-key=${key}`,
  },
};

export default constUrl;
