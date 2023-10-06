import cakeData from "../cakes/cakeData";

export async function getCakeData(id) {
  // find the cake with by id and return an object with the corresponding data
  for (let i = 0; i < cakeData.length; i++) {
    if (id === cakeData[i].id.toString()) {
      return {
        id: cakeData[i].id,
        img: cakeData[i].img,
        name: cakeData[i].name,
        caption: cakeData[i].caption,
        alt: cakeData[i].alt,
        width: cakeData[i].width,
        height: cakeData[i].height,
      };
    }
  }
}
