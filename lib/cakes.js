import cakeData from "../cakes/cakeData";

export function getAllCakeIds() {
  return cakeData.map((cake) => {
    return {
      params: {
        id: cake.id.toString(),
      },
    };
  });
}

export function getCakeData(id) {
  // find the cake with that id and make the info that object
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
